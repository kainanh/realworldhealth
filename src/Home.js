import "./App.css";
import React, { useState } from "react";
import { Grid, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ForgottenPasswordForm from "./Components/ForgottenPasswordForm";
import SignUpForm from "./Components/SignUpForm";
import Networking from "./Networking";
import { useNavigate } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import DisplayResponseMessage from "./Components/ResponseMessage";

function LoginPage() {
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgottenPasswordForm, setOpenForgottenPasswordForm] =
    useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const networking = new Networking();
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnackbar(false);
    setShowErrorSnackbar(false);
  };

  async function handleLoginSubmit(event) {
    event.preventDefault();
    const sessionID = await networking.handleLoginAttempt(email, password);
    if (sessionID.error) {
      setShowErrorSnackbar(true);
    } else if (sessionID) {
      await loginUser(sessionID);
      navigate("/dashboard");
    }
  }

  function loginUser(sessionID) {
    document.cookie = `sessionID=${sessionID}`;
  }

  function handleForgottenPassword() {
    setOpenForgottenPasswordForm(true);
  }

  function handleCloseForgottenPasswordForm() {
    setOpenForgottenPasswordForm(false);
  }

  function handleRecoverPasswordSubmit() {
    setOpenForgottenPasswordForm(false);
  }

  function handleSignUpForm() {
    setOpenSignUpForm(true);
  }

  async function handleSignUpFormSubmit() {
    const regularExpressions = /(?=.*[A-Z])(?=.*[!@#$%^&?*])/;
    if (
      email.length < 0 ||
      password !== passwordConfirmation ||
      password.length < 10 ||
      !regularExpressions.test(password)
    ) {
      return setShowErrorSnackbar(true);
    } else {
      const response = await networking.createAccount(
        email,
        password,
        passwordConfirmation
      );
      if (response.error) {
        return setShowErrorSnackbar(true);
      } else {
        setTimeout(() => handleCloseSignUpForm(), 1000);
        return setShowSuccessSnackbar(true);
      }
    }
  }

  function handleCloseSignUpForm() {
    setOpenSignUpForm(false);
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="login-page-wrapper"
        component="main"
        sx={{ height: "100vh" }}
      >
        <CssBaseline />
        <LoginForm
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
          handleLoginSubmit={handleLoginSubmit}
          handleForgottenPassword={handleForgottenPassword}
          handleSignUpForm={handleSignUpForm}
        />
      </Grid>
      <ForgottenPasswordForm
        data-testid="forgotten-password-form"
        open={openForgottenPasswordForm}
        handleCloseForgottenPasswordForm={handleCloseForgottenPasswordForm}
        handleRecoverPasswordSubmit={handleRecoverPasswordSubmit}
        onChangeEmail={(e) => setEmail(e.target.value)}
      />
      <SignUpForm
        data-testid="signup-form"
        open={openSignUpForm}
        handleCloseSignUpForm={handleCloseSignUpForm}
        handleSignUpFormSubmit={handleSignUpFormSubmit}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        onChangePasswordConfirmation={(e) =>
          setPasswordConfirmation(e.target.value)
        }
      />
      <DisplayResponseMessage
        openSuccessSnackbar={showSuccessSnackbar}
        openErrorSnackbar={showErrorSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </ThemeProvider>
  );
}

export default LoginPage;
