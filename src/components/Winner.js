import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { cleanField, clearTimer, toggleTimer, clearHighScoreName } from '../actions';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputScore from './InputScore'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


const style = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}



export default function Winner() {

  const field = useSelector(state => state.manageField);
  const timerIsActive = useSelector(state => state.timerIsActive)
  const seconds = useSelector(state => state.seconds)
  const minutes = useSelector(state => state.minutes)
  const highScoreName = useSelector(state => state.highScoreInput)
  const dispatch = useDispatch();

  // Is it fair to use "useState" in these situations rather than
  // using Redux?
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    dispatch(clearHighScoreName())
    dispatch(cleanField())
    dispatch(clearTimer())
    setOpen(false)
  };


  const submitScore = (e) => {

    const score = ((216 - field.safeSpaces) * 10000) - ((minutes * 60 + seconds) * 1000)
    const playerStats = {
      score,
      seconds,
      minutes,
      safeSpace: field.safeSpaces,
      name: highScoreName
    }

    if (playerStats.name.length > 3 && playerStats.name.length < 8) {
      axios.post('http://localhost:3001/users', playerStats)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            handleClose()
          }


        })
        .catch((err) => {
          console.log(err);
        })
    }

  };

  if (field.gameOver && !open) {
    setOpen(true);

    if (timerIsActive) {
      setTimeout(() => {
        dispatch(toggleTimer())
      }, 500);
    }


  }

  // our material UI box
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
        <DialogTitle id="alert-dialog-slide-title" style={{ textAlign: 'center' }}>
          {field.safeSpaces === 0 ? 'Winner' : 'BOOOOOM.....'}
          <br />
          {field.safeSpaces === 0 ?
            "🎉🥳🎉🥳🎉🥳🎉🥳🎉🥳🎉🥳🎉" :
            "💥🥕💥🥕💥🥕💥🥕💥🥕💥🥕💥"
          }
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

            {field.safeSpaces === 0 ?
              `Excellent Job! You Finished With A Time Of ${minutes} Minutes And ${seconds} Seconds` :
              `Vegetables And NOT BLOWING UP Is Essential For Proper Nutrition You Blew Up At ${minutes} Minutes And ${seconds} Seconds`
            }

          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-score" style={{ textAlign: 'center' }}>
            Your Score: {((216 - field.safeSpaces) * 10000) - ((minutes * 60 + seconds) * 1000)}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={style.buttonGroup} >
          <Button onClick={handleClose} color="primary">
            Start New Game!
          </Button>
          <Button color="primary" onClick={submitScore}>
            SubmitScore
          </Button>
          <InputScore
            field={field}
            seconds={seconds}
            minutes={minutes}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
