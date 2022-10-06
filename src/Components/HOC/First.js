import React, { useState } from 'react'
import HOC from './HOC';

const First = (props) => {

    //we can use custom hooks instead of this 
    //we are using the same logic in second comp too so we can use hoc in this case for not repeating code again and again
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    return (
        <>
            count value is : {props.count} <br />
            <button onClick={props.increment}>increment</button> <br />
        </>
    )
}

export default HOC(First);