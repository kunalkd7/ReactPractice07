import React, { memo } from 'react'

function CompD(props) {

    return (
        <>{console.log("CompD renders")}
           <button onClick={props.onclick}>incrementCount</button>
        </>
    )
}

export default memo(CompD);
