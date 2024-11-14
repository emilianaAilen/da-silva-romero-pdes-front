import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AlertType } from "../../types";
import { RootState } from "../../../../store";
import { SyntheticEvent } from "react";
import { hideSnackbar } from "../../slices/snackbarSlice";

export const GlobalSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector(
    (state: RootState) => state.snackbar
  );

  const handleClose = (
    _event: Event | SyntheticEvent<any, Event>,
    reason?: string
  ): void => {
    if (reason === "clickaway") return;
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={type as AlertType}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
