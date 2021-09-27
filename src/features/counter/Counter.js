import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import {Button,Badge} from '@mui/material';
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <Button
            variant="outlined"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Badge badgeContent={count} color="primary" />
        <Button
            variant="outlined"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        
      </div>
    </div>
  )
}
