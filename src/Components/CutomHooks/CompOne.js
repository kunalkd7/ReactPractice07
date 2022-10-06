import React, { useEffect, useState } from 'react'
import { useSetTitleHook } from './Hooks/useSetTitleHook';

export default function () {
    const [count, setCount] = useState(0);

    //suppose we need this logic in so many component then we have to rewrite the code again and again
    //we should use custom hooks in this situation
    // useEffect(() => {
    //     document.title = `title ${count}`
    // }, [count])

    //it is more convienient as it decreases our line of code and we can use this hook in any component
    useSetTitleHook(count)
    return (<>
        example of custom hooks in useEffect case <br />
        <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </>)
}
