import React from 'react'
import Timer from './Timer'
import { useSelector, useDispatch } from 'react-redux';
import sand from '../assets/sandbg.jpg'

const style = {
  bar: {
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '595px',
    margin: 'auto',
    marginBottom: '1%',
    border: '4px solid #272727',
    backgroundImage: `url(${sand})`
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
