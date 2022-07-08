import "../App.css";
import React from "react";
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
import SimpleImageSlider from "react-simple-image-slider";

export default function LoginForm(props) {
  const images = [
    { url: require("../Images/stock-photo1.jpg") },
    { url: require("../Images/stock-photo2.jpg") },
    { url: require("../Images/stock-photo3.jpg") },
  ];
  return (
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
          src={require("../Images/rwhealth-logo.png")}
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
            onSubmit={props.handleLoginSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              onChange={props.onChangeEmail}
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
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={props.onChangePassword}
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
                  onClick={props.handleForgottenPassword}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={props.handleSignUpForm}>
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
          slideDuration={3}
        />
      </Grid>
    </Grid>
  );
}
