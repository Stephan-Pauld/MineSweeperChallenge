import React, { useEffect } from 'react'
import setUpField from '../helpers/setUpField'
import { useSelector, useDispatch } from 'react-redux';
import { cleanField } from '../actions'

const style = {
  field: {
    display: 'flex'
  },
  space: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    fontWeight: 'bold',
    border: '1px solid black',
    backgroundColor: '#55a755',
  }
}


export default function Field() {
  const field = useSelector(state => state.cleanField)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cleanField())
  }, [])

    return field.map((row) => {

      return (
        <div style={style.field}>
          {row.map((cell) => {
            return <div style={style.space}>{cell.value}</div>
          })}
        </div>
      )
    })
}
