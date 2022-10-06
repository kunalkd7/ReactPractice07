import React, { useContext } from 'react'
import { myContextOne } from '../UseContextHook'
import { myContextTwo } from '../UseContextHook'

export function CompB() {
    const contextOne = useContext(myContextOne)
    const contextTwo = useContext(myContextTwo)
    return (
        <div>CompB : {contextOne} {contextTwo}</div>
    )
}
