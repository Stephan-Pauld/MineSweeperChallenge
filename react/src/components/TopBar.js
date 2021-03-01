import React from 'react'
import Timer from './Timer'
import { useSelector, useDispatch } from 'react-redux';

const style = {
  bar: {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '595px',
    margin: 'auto',
    marginBottom: '1%',
    background: 'linear-gradient(to bottom right, #ffff00 0%, #666699 90%)'
  }
}

export default function TopBar() {
  const field = useSelector(state => state.manageField);
  return (
    <div style={style.bar}>
      <h3>Tiles Remaining: {field.safeSpaces}</h3>
      <Timer/>
      
    </div>
  )
}
