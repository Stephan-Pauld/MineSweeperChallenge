import React, { useEffect } from 'react'
import setUpField from '../helpers/setUpField'
import { useSelector, useDispatch } from 'react-redux';
import { cleanField, revealTile } from '../actions'
import Cell from './Cell'
import showEmpties from '../helpers/showEmpties';

const style = {
  field: {
    display: 'flex'
  },

}


export default function Field() {
  const field = useSelector(state => state.manageField)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleanField())
  }, [])

  const openTile = (cellInfo) => {
    const { row, column } = cellInfo;


    let copiedField = JSON.parse(JSON.stringify(field))

    if (copiedField[row][column].value === "💣") {
      alert("Boom")
    } else {
      let emptyLocations = showEmpties(copiedField,row,column )
      // copiedField[row][column].show = true;
      dispatch(revealTile(emptyLocations))
    }

  }

  const setFlag = (e, cellInfo) => {
    // Do I need to do something with the state of my game area? or changing the object is fine?
    e.preventDefault()
    console.log(cellInfo);
    if (!cellInfo.shown) {
      cellInfo.hasFlag = !cellInfo.hasFlag
    }
  }

  return field.map((row) => {

    return (
      <div style={style.field}>
        {row.map((cell) => {
          return <Cell cellInfo={cell} setFlag={setFlag} openTile={openTile} />
        })}
      </div>
    )
  })
}
