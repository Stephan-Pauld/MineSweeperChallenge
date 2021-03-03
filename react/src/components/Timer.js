import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { seconds, minutes, resetSeconds } from '../actions';
import timer from '../assets/timer.svg'

const style = {
  timer: {
    width: 33,
    marginLeft: '40px'
  },
  timerRow: {
    display: 'flex',
  }
}
export default function Timer() {
  const timeSeconds = useSelector(state => state.seconds)
  const timeMinutes = useSelector(state => state.minutes)
  const timerIsActive = useSelector(state => state.timerIsActive)
  const dispatch = useDispatch();


  // timer using redux. same timer from Dota2 Timer project except redux
  useEffect(() => {
    let interval = null;

    if (timeSeconds > 60) {
      dispatch(minutes())
      dispatch(resetSeconds())
    }

    if (timerIsActive) {
      interval = setInterval(() => {
        dispatch(seconds())
        // setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeSeconds, timerIsActive])



  return (
    <div style={style.timerRow}>
      <img style={style.timer} src={timer} alt="" />
      <h4>{timeMinutes}:{timeSeconds > 9 ? timeSeconds : `0${timeSeconds}`}</h4>
    </div>
  )
}
