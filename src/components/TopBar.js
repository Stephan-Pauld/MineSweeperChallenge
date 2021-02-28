import React from 'react'
import Timer from './Timer'
import { useSelector, useDispatch } from 'react-redux';

const style = {
  bar: {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '40%',
    margin: 'auto',
    backgroundColor: '#c3b50d'
  }
}

export default function TopBar() {
  const field = useSelector(state => state.manageField);
  return (
    <div style={style.bar}>
      <h5>{field.safeSpaces}</h5>
      <Timer/>
      
    </div>
  )
}
