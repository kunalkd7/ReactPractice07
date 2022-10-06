import React, { useState } from 'react'
import { useSetCount } from './Hooks/useSetCount';

export default function CompThree() {
    
    const[count,increment,decrement] = useSetCount()

    return (
        <>
            Custom hook example for function and state logic
            <p>Value of Count : {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}
