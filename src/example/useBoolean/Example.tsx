import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";
import useBoolean from "../../hooks/useBoolean/useBoolean";

const Example = () => {
  const dialog = useBoolean();

  return (
    <>
      <Button onClick={() => dialog.set()}>Open dialog</Button>
      <Dialog open={dialog.state} onClose={() => dialog.reset()}>
        <DialogTitle>This is a dialog!</DialogTitle>
        <DialogContent>
          <DialogContentText>Click outside of dialog or on Close button to see how useBoolean works!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dialog.reset()}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Example;