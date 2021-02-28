import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cleanField, revealTile, gameOver, toggleTimer } from '../actions'
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
  const timerIsActive = useSelector(state => state.timerIsActive)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanField())
  }, [])


  const openTile = (cellInfo) => {
    const { row, column } = cellInfo;
    let copiedField = JSON.parse(JSON.stringify(field))

    if (!cellInfo.hasFlag) {
      if (copiedField.field[row][column].value === "💣") {

        copiedField.mineList.map((mine) => {
          copiedField.field[mine.row][mine.column].show = true;
        })

        const payLoadObj = {
          field: copiedField.field,
          mineList: copiedField.mineList,
          safeSpaces: copiedField.safeSpaces,
          gameOver: true,
        }
        dispatch(toggleTimer())
        dispatch(gameOver(payLoadObj))
      } else {

        if (!timerIsActive) {
          dispatch(toggleTimer())
        }

        let emptyLocations = showEmpties(copiedField.field, copiedField.safeSpaces, row, column)

        const payLoadObj = {
          field: emptyLocations.field,
          mineList: copiedField.mineList,
          safeSpaces: emptyLocations.spaces
        }
        dispatch(revealTile(payLoadObj))
      }
    }
  }

  const setFlag = (e, cellInfo) => {
    e.preventDefault()
    const { row, column } = cellInfo;
    let copiedField = JSON.parse(JSON.stringify(field))

    if (!cellInfo.show) {
      if (!copiedField.field[row][column].shown) {
        copiedField.field[row][column].hasFlag = !copiedField.field[row][column].hasFlag
      }

      const payLoadObj = {
        field: copiedField.field,
        mineList: copiedField.mineList,
        safeSpaces: copiedField.safeSpaces
      }
      dispatch(revealTile(payLoadObj))
    }

  }

  if (field.field) {
    return field.field.map((row) => {
      return (
        <div style={style.field}>
          {row.map((cell) => {
            return <Cell cellInfo={cell} setFlag={setFlag} openTile={openTile} gameOver={field.gameOver ? true : false} />
          })}
        </div>
      )
    })
  }


  return (
    <h1>Creating Mine Field...</h1>
  )

}
