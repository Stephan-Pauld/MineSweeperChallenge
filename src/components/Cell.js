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
    backgroundColor: '#55a755',
  },
}

export default function Cell({ cellInfo, setFlag, openTile }) {
  return (
    <div
      style={style.cellStyle}
      onClick={() => openTile(cellInfo)}
      onContextMenu={(e) => { setFlag(e, cellInfo) }}

    >
      {cellInfo.show ? cellInfo.value: ''}


      
    </div>
  )
}
