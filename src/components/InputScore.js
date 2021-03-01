import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { highScoreInput } from '../actions';
import axios from "axios";

export default function InputScore({ field, seconds, minutes }) {
  const highScoreName = useSelector(state => state.highScoreInput)
  const dispatch = useDispatch();


  const submitScore = (e) => {
    e.preventDefault()
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
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }

  };


  return (
    <form action="">
      <input type="text" value={highScoreName} onChange={(e) => dispatch(highScoreInput(e.target.value))} />
      <button onClick={(e) => submitScore(e)}>
        submit
      </button>
    </form>
  )
}
