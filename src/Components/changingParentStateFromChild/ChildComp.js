import React from 'react'

export default function ChildComp(props) {
    return (
        <>
            count value in child comp is : {props.count} <br />
            <button onClick={() => { props.myfun(props.count + 1) }}> increment </button>

        </>
    )
}
