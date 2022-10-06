import React, { createContext } from 'react'
import { CompA } from './HelperComponent/CompA'
import { CompB } from './HelperComponent/CompB'

export const myContextOne = createContext()
export const myContextTwo = createContext()
// suppose we have a component tree and we need to pass some value or state from parent to children we need to pass that state or value
//to each component which can create problem of prop drilling so many extra lines of codes
//in this situation we can use context api to transfer the state or value from parent to any child component directly
export function UseContextHook() {
    return (
        <>
            <myContextOne.Provider value={"myContextOne"}>
                <myContextTwo.Provider value="myContextTwo">
                    <CompA />
                    <CompB />
                </myContextTwo.Provider>
            </ myContextOne.Provider >
        </>
    )
}
