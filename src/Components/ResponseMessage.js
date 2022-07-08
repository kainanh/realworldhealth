import React from "react";
import { Alert, Snackbar } from "@mui/material";

export default function DisplayResponseMessage(props) {
  return (
    <div>
      <Snackbar
        data-testid="signup-success"
        open={props.openSuccessSnackbar}
        autoHideDuration={5000}
        onClose={props.handleCloseSnackbar}
      >
        <Alert
          onClose={props.handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Account Created!
        </Alert>
      </Snackbar>
      <Snackbar
        data-testid="signup-error"
        open={props.openErrorSnackbar}
        autoHideDuration={5000}
        onClose={props.handleCloseSnackbar}
      >
        <Alert
          onClose={props.handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Could not create account, please check your email and password again!
        </Alert>
      </Snackbar>
    </div>
  );
}
