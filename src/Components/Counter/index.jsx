import React, { useState } from 'react'
import {Button} from '../'

const Counter = () => {
    const [count, setCount ] = useState(2)
    const handleIncrease = () =>{
        setCount(count + 1)
    }
  return (
    <div>
        <p>{count}</p>

        <Button title="+" action={handleIncrease} />
    </div>
  )
}

export default Counter