import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

export default function SignUpForm(props) {
  return (
    <Dialog open={props.open} sx={{ borderRadius: 5 }}>
      <DialogTitle sx={{ fontWeight: "bold" }}>
        Create a new account
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter an email</DialogContentText>
        <TextField
          required
          margin="dense"
          sx={{ marginBottom: 6 }}
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        <DialogContentText>
          Please enter a password; password must contain 10+ characters,
          uppercase and special characters.
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="name"
          label="Password Confirmation"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions sx={{ marginRight: 2 }}>
        <Button
          onClick={props.handleCloseSignUpForm}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 2 }}
        >
          Cancel
        </Button>
        <Button
          onClick={props.handleSignUpFormSubmit}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 2 }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
