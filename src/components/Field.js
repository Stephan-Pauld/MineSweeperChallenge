import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cleanField, revealTile } from '../actions'
import Cell from './Cell'
import showEmpties from '../helpers/showEmpties';

const style = {
  field: {
    display: 'flex',
    justifyContent: 'center'
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

      const payLoadObj = {
        field: copiedField.field,
        mineList: copiedField.mineList,
        safeSpaces: copiedField.safeSpaces
      }
      dispatch(revealTile(payLoadObj))
      
    } else {

      let emptyLocations = showEmpties(copiedField.field, copiedField.safeSpaces, row, column)

      const payLoadObj = {
        field: emptyLocations.field,
        mineList: copiedField.mineList,
        safeSpaces: emptyLocations.spaces
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
  // console.log(field);
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
    <h1>Creating Mine Field...</h1>
  )

}
