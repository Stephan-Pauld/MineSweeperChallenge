import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { useSelector, useDispatch } from 'react-redux';
import { cleanField, clearTimer, toggleTimer } from '../actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Winner() {

  const field = useSelector(state => state.manageField);
  const timerIsActive = useSelector(state => state.timerIsActive)
  const seconds = useSelector(state => state.seconds)
  const minutes = useSelector(state => state.minutes)
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    dispatch(cleanField())
    dispatch(clearTimer())
    setOpen(false)
  };
  
  if (field.safeSpaces === 0 && !open) {

    setOpen(true);

    setTimeout(() => {
      dispatch(toggleTimer())
    }, 500);
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{textAlign: 'center'}}>
          {"WINNER!"}
          <br/>
          {"🎉🥳🎉🥳🎉🥳🎉🥳🎉🥳🎉🥳"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Excellent Job! You Finished With A Time Of {minutes} Minutes And {seconds} seconds
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-score" style={{textAlign: 'center'}}>
            Your Score: 0345987
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Start New Game!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
