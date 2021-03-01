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


  // use effect creates the fresh field right away
  useEffect(() => {
    dispatch(cleanField())
  }, [])



  // When we click on a tile from the cell comp
  const openTile = (cellInfo) => {
    const { row, column } = cellInfo;
    let copiedField = JSON.parse(JSON.stringify(field))


    // as long as a cell does not have a flag
    if (!cellInfo.hasFlag) {
      if (copiedField.field[row][column].value === "💣") {

        // we map through all the mine cells and set them all to true when a mine is hit
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


        // turns the clock on when we first click on a cell to start the game
        if (!timerIsActive) {
          dispatch(toggleTimer())
        }

        // variable for the show empties helper we pass in our copied field and the amount of safe spaces
        let emptyLocations = showEmpties(copiedField.field, copiedField.safeSpaces, row, column)


        // I am new to redux and not sure if this is proper... I would love to know a cleaner way of doing this.
        const payLoadObj = {
          field: emptyLocations.field,
          mineList: copiedField.mineList,
          safeSpaces: emptyLocations.spaces
        }
        dispatch(revealTile(payLoadObj))
      }
    }
  }


  // Our win condition when there are no tiles left to click
  if (field.safeSpaces === 0 && !field.gameOver) {
    let copiedField = JSON.parse(JSON.stringify(field))
    const payLoadObj = {
      field: copiedField.field,
      mineList: copiedField.mineList,
      safeSpaces: copiedField.safeSpaces,
      gameOver: true,
    }
    setTimeout(() => {
      // I found with the dispatch a few times I need a timeout as it happens too fast i think
      dispatch(gameOver(payLoadObj))
    }, 400);
  }





  const setFlag = (e, cellInfo) => {
    // our right click from the cell comp setting a flag as long as the tile has not been revealed
    
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
