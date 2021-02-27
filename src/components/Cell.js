import React from 'react'

const style = {
  cellStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    fontWeight: 'bold',
    border: '1px solid black',
    backgroundColor: '#5D5360',
  },
  flag: {
    width: 25
  },
  revealed: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    fontWeight: 'bold',
    border: '1px solid black',
    backgroundColor: 'rgb(207 183 214)',
  }
}

export default function Cell({ cellInfo, setFlag, openTile, gameOver }) {
const flag = <img style={style.flag}src="https://www.flaticon.com/svg/vstatic/svg/2164/2164733.svg?token=exp=1614460155~hmac=796d4433507353b3cd43cb6b3c02f8e2" alt=""/>




  if (!gameOver) {

    return (
      <div
        style={cellInfo.show ? style.revealed : style.cellStyle}
        onClick={() => openTile(cellInfo)}
        onContextMenu={(e) => { setFlag(e, cellInfo) }}
      >
        {cellInfo.show ? cellInfo.value === 0 ? '' : cellInfo.value : ''}
        {cellInfo.hasFlag ? flag : ""}

      </div>
    )
  }



  return (
    <div
    style={cellInfo.show ? style.revealed : style.cellStyle}
    >
      {cellInfo.show ? cellInfo.value === 0 ? '' : cellInfo.value : ''}

    </div>
  )
}
