import React, { useState, useMemo, useCallback } from 'react'

export function UseMemoHook() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [isEven, setIsEven] = useState(true);


    //this function will run everytime when component rerenders because funtion gets initialise each time when renders so it is a new funtion for jsx
    //when counttwo state's changes it will run it is not good for app performance
    //we need to clearify it will run only when countone state changes 
    //we can useMemo or useCallback in this situation 

    //useMemo = when function is returning something
    //useCallback = when funtion is not returning anything
    const checkEven = useCallback(() => {
        let i = 0;
        while (i < 1000000000) i++;
        setCountOne(prevC => prevC + 1)
        setIsEven(!isEven)
    }, [countOne])

    const evenCheck = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return countThree % 2 === 0
    },[countThree])

    return (<>
        <button onClick={checkEven}> count one value</button>
        {countOne} {isEven ? "even" : "false"}<br />

        <button onClick={() => setCountTwo(prevC => prevC + 1)}> count two value</button>
        {countTwo} <br />

        <button onClick={() => setCountThree(prevC => prevC + 1)}>count three value</button>
        {countThree} {evenCheck ? "true" : "false"}

    </>)
}
