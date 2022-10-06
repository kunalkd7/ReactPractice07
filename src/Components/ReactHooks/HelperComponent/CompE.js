import React,{memo} from 'react'

function CompE() {
  return (
    <>{console.log("CompE renders")}
            <div>CompE Count </div>
        </>
  )
}

export default memo(CompE);
