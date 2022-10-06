import React, { useContext } from 'react'
import { myContextTwo } from '../UseContextHook'

export function CompA() {
    const contextTwo = useContext(myContextTwo)
    return (
        <div>CompA : {contextTwo}</div>
    )
}
