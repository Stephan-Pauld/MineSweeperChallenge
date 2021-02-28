import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cleanField, revealTile, gameOver } from '../actions'
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

  // const gameOver = (payload) => {

  //   // instead of this function lets add a gameover state 
  //   // to field and if true lets take a complete copy of the 
  //   // board pass it to cell and remove the onClick events?

  //   dispatch(revealTile(payload))
  //   setTimeout(() => {
  //     alert("Gameover")
  //     dispatch(cleanField())
  //   }, 300);
  // }

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
        dispatch(gameOver(payLoadObj))
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
