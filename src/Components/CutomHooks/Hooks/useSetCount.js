import React,{useState} from 'react'

export function useSetCount() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevC => prevC + 1)
    }

    const decrement = () => {
        setCount(prevC => prevC - 1)
    }

    return [count, increment, decrement]
}
