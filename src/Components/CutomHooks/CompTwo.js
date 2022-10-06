import React, { useState } from 'react'
import { useSetCount } from './Hooks/useSetCount';

export default function CompTwo() {

    //suppose we need this functionality for so many component so instead of writing this for every comp we can use custom hook
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(prevC => prevC + 1)
    // }

    // const decrement = () => {
    //     setCount(prevC => prevC - 1)
    // }

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
