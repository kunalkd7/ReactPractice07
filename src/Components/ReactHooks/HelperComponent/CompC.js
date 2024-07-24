import React, { memo } from "react";

function CompC(props) {
  return (
    <>
      {console.log("CompC renders")}
      <div>CompC Count = {props.count} </div>
    </>
  );
}

//React.memo is used for component to prevent rerendering without reason
//React.memo checks the prev state with current state if there's no change it won't render the child component
// or we can say it checks the props if props value changes only then it allow comp to render

// export default CompC; // it gets rendered everytime
export default memo(CompC); //only if state which is passed as prop in parent comp gets changed
