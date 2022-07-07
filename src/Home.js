import "./App.css";
import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SimpleImageSlider from "react-simple-image-slider";
import ForgottenPasswordForm from "./Components/ForgottenPasswordForm";
import SignUpForm from "./Components/SignUpForm";
import Networking from "./Networking";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgottenPasswordForm, setOpenForgottenPasswordForm] =
    useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // const networking = new Networking();
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", sans-serif',
    },
  });

  const images = [
    { url: require("./Images/stock-photo1.jpg") },
    { url: require("./Images/stock-photo2.jpg") },
    { url: require("./Images/stock-photo3.jpg") },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    // const response = await networking.handleLoginAttempt();
    // if (response.error) {
    //   setError(true);
    // } else {
    //   setError(false);
    //   navigate("/dashboard");
    // }
    navigate("/dashboard");
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

  function handleCloseSignUpForm() {
    setOpenSignUpForm(false);
  }

  function handleSignUpFormSubmit() {
    setOpenSignUpForm(false);
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
        <Grid
          item
          className="login-form-wrapper"
          xs={12}
          sm={8}
          md={4}
          style={{ backgroundColor: "#2B314A", paddingTop: "30px" }}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            component="img"
            sx={{
              height: 30,
              paddingLeft: "30px",
            }}
            alt="RWHealth Logo"
            src={require("./Images/rwhealth-logo.png")}
          />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                paddingBottom: "10%",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color={"white"}
                fontSize="30px"
              >
                Welcome to your
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                color={"white"}
                fontSize="30px"
              >
                Data Science Platform
              </Typography>
            </Box>
            <Typography
              component="h1"
              variant="h5"
              color={"white"}
              fontSize="20px"
            >
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  input: {
                    background: "#EAEBED",
                    borderRadius: 5,
                  },
                }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  input: {
                    background: "#EAEBED",
                    borderRadius: 5,
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 4 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={handleForgottenPassword}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={handleSignUpForm}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item className="image-slider" xs={false} sm={4} md={8}>
          <SimpleImageSlider
            width={960}
            height={750}
            images={images}
            autoPlay={true}
          />
        </Grid>
      </Grid>
      <ForgottenPasswordForm
        open={openForgottenPasswordForm}
        handleCloseForgottenPasswordForm={handleCloseForgottenPasswordForm}
        handleRecoverPasswordSubmit={handleRecoverPasswordSubmit}
      />
      <SignUpForm
        open={openSignUpForm}
        handleCloseSignUpForm={handleCloseSignUpForm}
        handleSignUpFormSubmit={handleSignUpFormSubmit}
      />
    </ThemeProvider>
  );
}

export default LoginPage;
