import React, { useEffect, useRef, useState } from 'react'

export function UseRefHook() {
    //useRef is similar to usestate but it will not couse rerender of page
    //suppose we need a count of how many times our component rendered it is imposible to do with useState hook
    //because it will couse memory leak error

    // const [render, setrender] = useState(0);
    // useEffect(() => {
    //    setrender((prevR => prevR +1));
    // useState will couse rerender so it will create an infinite loop in this situation
    // }, [render])

    const [render, setRender] = useState(0);
    const [renderOne, setRenderOne] = useState(0);
    const renderRef = useRef(0);

    //another usecase to create ref for input 
    //with this there's no need of onchange method it will take value directly from dom
    //basically it is a ref of input field which 
    const inputRef = useRef(null)

    const handleSubmit = () => {
        console.log(inputRef.current.value)
    }

    useEffect(() => {
        console.log(renderRef.current)
        inputRef.current.focus(); // this makes focus to input field by default
        renderRef.current = renderRef.current + 1;
    })

    return (
        <>
            <button onClick={() => setRender((prevr => prevr + 1))}> click me </button> {render}
            <button onClick={() => setRenderOne((prevr => prevr + 1))}> click me </button> {renderOne} <br />

            <input type="text" ref={inputRef} />
            <button type='submit' onClick={handleSubmit}>submit</button>

        </>
    )
}
