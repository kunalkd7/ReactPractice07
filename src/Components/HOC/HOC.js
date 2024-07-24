import React, { useState } from "react";

const HOC = (Component) => {
  function InnerComp() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };

    return (
      <>
        <Component count={count} increment={increment} />
      </>
    );
  }
  return InnerComp;
};

export default HOC;
