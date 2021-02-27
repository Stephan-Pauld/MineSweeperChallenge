import React, { useEffect } from 'react'
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
  const field = useSelector(state => state.manageField);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanField())
  }, [])

  const openTile = (cellInfo) => {
    const { row, column } = cellInfo;
    let copiedField = JSON.parse(JSON.stringify(field))

    if (copiedField.field[row][column].value === "💣") {

      copiedField.mineList.map((mine) => {
        copiedField.field[mine.row][mine.column].show = true;
      })

      // console.log(copiedField.field);
      const payLoadObj = {
        field: copiedField.field,
        mineList: copiedField.mineList
      }
      dispatch(revealTile(payLoadObj))
      
    } else {


      let emptyLocations = showEmpties(copiedField.field, row, column)
      const payLoadObj = {
        field: emptyLocations,
        mineList: copiedField.mineList
      }
      dispatch(revealTile(payLoadObj))
    }

  }

  const setFlag = (e, cellInfo) => {

    e.preventDefault()
    if (!cellInfo.shown) {
      cellInfo.hasFlag = !cellInfo.hasFlag
    }
  }
  if (field.field) {
    return field.field.map((row) => {

      return (
        <div style={style.field}>
          {row.map((cell) => {
            return <Cell cellInfo={cell} setFlag={setFlag} openTile={openTile} />
          })}
        </div>
      )
    })
  }

  return (
    <h1>cats</h1>
  )

}
