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

export default function ForgottenPasswordForm(props) {
  return (
    <Dialog
      data-testid="forgotPassword-form"
      open={props.open}
      sx={{ borderRadius: 5 }}
    >
      <DialogTitle sx={{ fontWeight: "bold" }}>
        Forgotten your password?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To recover your password, please enter your email address here. We
          will send an email shortly.
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          onChange={props.onChangeEmail}
        />
      </DialogContent>
      <DialogActions sx={{ marginRight: 2 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          onClick={props.handleCloseForgottenPasswordForm}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          onClick={props.handleRecoverPasswordSubmit}
        >
          Recover Password
        </Button>
      </DialogActions>
    </Dialog>
  );
}
