import React, { useState } from 'react'
import HOC from './HOC';

function Second(props) {

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    return (
        <>
            count value is : {props.count} <br />
            <button onMouseOver={props.increment}>increment</button>
        </>
    )
}

export default HOC(Second);