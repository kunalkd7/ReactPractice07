import React, { useState, useEffect } from 'react'

export function UseEffectHook() {

    //whenever state changes component gets rerender
    const [count, setCount] = useState(0);

    //without array it will work everytime 
    //with array it will work only one time
    //array with dependencies it will work when the dependencies - state changes 
    //It has componentdidmount componentdidupdate and componentwillunmount
    useEffect(() => {
        console.log("useeffect running all the time");
    })

    useEffect(() => {
        console.log("useeffect runs only once");
        //any cleanup code can be written inside the return funtion in useeffect hook
        //suppose we have added a event listner on window in componentdidmount when the component gets removed from the dom 
        //event will not gonna remove itself because it's an event so we have to remove it manually in componentwillunmount
        return () => {
            //componentwillunmount it will run only when the component gets removed from the dom 
            //whaterer events or method you want to remove when component gets removed from the dom we have to write it here
        }
    }, [])

    useEffect(() => {
        console.log("useeffect runs when only count state changes");
    }, [count])

    return (
        <>
            {console.log("render")}
            <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>Increment Count</button><br />
            value of count : {count}
        </>
    )
}
