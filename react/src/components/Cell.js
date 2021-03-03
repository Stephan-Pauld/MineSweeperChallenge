import React from 'react'
import sand from '../assets/sand2.jpg'
import nuke from '../assets/mine.svg'


const style = {
  cellStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    fontWeight: 'bold',
    border: '1px solid #030f4c38',
    // background: 'linear-gradient(to bottom right, #669999 31%, #003366 123%)'
    backgroundImage: `url(${sand})`
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
    backgroundColor: '#f7ee85ba',
    // backgroundImage: `url(${nuke})`
  },
  bombBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    fontWeight: 'bold',
    border: '1px solid black',
    backgroundColor: 'rgb(122 255 0)',
    backgroundImage: `url(${nuke})`
  }
}

export default function Cell({ cellInfo, setFlag, openTile, gameOver }) {

const flag = <img style={style.flag}src="https://www.flaticon.com/svg/vstatic/svg/2164/2164733.svg?token=exp=1614460155~hmac=796d4433507353b3cd43cb6b3c02f8e2" alt=""/>



  // this condition !gameover allows this component to allow button clicks
  // but when the conditions is true we render the same stuff with no event handlers
  if (!gameOver) {
    return (
      <div
        style={cellInfo.show ? style.revealed : style.cellStyle}
        onClick={() => openTile(cellInfo)}
        onContextMenu={(e) => { setFlag(e, cellInfo) }}
      >
        {cellInfo.show ? cellInfo.value === 0 ? '' : cellInfo.value : ''}
        {cellInfo.hasFlag ? flag : ""}
        {/* {cellInfo.value === "💣" ? cellInfo.value : ''} */}

      </div>
    )
  }




  // no onclick or contextMenu
  return (
    <div
    style={cellInfo.show ? cellInfo.value === "💣" ? style.bombBg : style.revealed : style.cellStyle}
    >
      {cellInfo.show ? cellInfo.value === 0 || cellInfo.value === "💣"? '' : cellInfo.value : ''}

    </div>
  )
}
