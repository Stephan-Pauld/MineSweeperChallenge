import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { seconds, minutes, resetSeconds } from '../actions';


const style = {
  timer: {
    width: 25,
    marginLeft: '40px'
  },
  timerRow: {
    display: 'flex',
  }
}
export default function Timer() {
  const timeSeconds = useSelector(state => state.seconds)
  const timeMinutes = useSelector(state => state.minutes)
  const dispatch = useDispatch();


  useEffect(() => {
    let interval = null;
    const cats = true

    if (timeSeconds > 60) {
      dispatch(minutes())
      dispatch(resetSeconds())
    }




    if (cats) {
      interval = setInterval(() => {
        dispatch(seconds())
        // setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeSeconds])

  // console.log(timeSeconds);


  return (
    <div style={style.timerRow}>
      <img style={style.timer} src="https://www.flaticon.com/svg/vstatic/svg/4245/4245796.svg?token=exp=1614468961~hmac=a92b9779a281caf91f5789f1b1c7de0b" alt="" />
      <h4>{timeMinutes}:{timeSeconds > 9? timeSeconds: `0${timeSeconds}`}</h4>
    </div>
  )
}
