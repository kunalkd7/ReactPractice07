import React, { useState } from "react";
import ChildComp from "./ChildComp";

export function ParentComp() {
  // example of changing parent comp state from child comp using callback method
  const [count, setCount] = useState(0);

  const myfun = (value) => {
    setCount(value);
  };

  return (
    <>
      count is : {count}
      <br />
      <ChildComp count={count} myfun={myfun} />
    </>
  );
}
