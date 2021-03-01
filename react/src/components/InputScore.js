import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { highScoreInput } from '../actions';


export default function InputScore({ field, seconds, minutes }) {
  const highScoreName = useSelector(state => state.highScoreInput)
  const dispatch = useDispatch();


  return (
    <form action="">
      <input type="text" placeholder="name(no spaces)" value={highScoreName} onChange={(e) => dispatch(highScoreInput(e.target.value))} />
    </form>
  )
}
