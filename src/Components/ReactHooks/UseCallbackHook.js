import React, { useState, useCallback } from 'react'
import CompC from './HelperComponent/CompC';
import CompD from './HelperComponent/CompD';
import CompE from './HelperComponent/CompE';

export function UseCallbackHook() {

    const [count, setCount] = useState(0);
    const [render, setrender] = useState(0);

    //usecallback prevent functions to get reinitialise every time 
    //it will only allow it to reinitialise again when the count state gets changes 
    //because this func is based on count state that's why we have to pass count 
    //depandency in this 
    //now comp d wont rerender when render(state) value changes 
    const incrementCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    },[count])

    return (
        <>
            <div>UseCallbackHook</div>
            <CompC count={count} />
            {/* only component d gets rendered even if the count value haven't even changed */}
            {/* it happens cz when react component renders it kind off reinitialise the function again every time */}
            {/* so for component d incrementCount is always a new function */}
            {/* to stop this we can use usecallback hook */}
            <CompD onclick={incrementCount} />
            <CompE />
            <button onClick={() => { setrender((prevrender) => prevrender + 1) }}>render again {render}</button>
        </>
    )
}
