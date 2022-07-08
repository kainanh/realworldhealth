import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./Home";

describe("Login Page", () => {
  const homePage = (
    <Router>
      <LoginPage />
    </Router>
  );
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("renders form component", () => {
    render(homePage);

    const form = screen.getByTestId("login-form");
    expect(form).toBeInTheDocument();
  });

  test("When a user clicks on sign up, a sign up form will show up", async () => {
    render(homePage);
    const createAccountLnk = screen.getByTestId("createAccountlink");
    fireEvent.click(createAccountLnk);
    await waitFor(() => screen.findByTestId("signup-form"), {
      timeout: 2000,
    });
    const signUpForm = screen.getByTestId("signup-form");
    expect(signUpForm).toBeInTheDocument();
  });

  test("When a user clicks on forgotten password, a forgotten password form will show up", async () => {
    render(homePage);
    const forgotPasswordLnk = screen.getByTestId("forgotPasswordLink");
    fireEvent.click(forgotPasswordLnk);
    await waitFor(() => screen.findByTestId("forgotPassword-form"), {
      timeout: 2000,
    });
    const forgotPasswordForm = screen.getByTestId("forgotPassword-form");
    expect(forgotPasswordForm).toBeInTheDocument();
  });
});
