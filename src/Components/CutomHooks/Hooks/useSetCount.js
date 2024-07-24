import React, { useEffect, useState } from "react";

export function useSetCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevC) => prevC + 1);
  };

  const decrement = () => {
    setCount((prevC) => prevC - 1);
  };

//   useEffect(()=>{console.log("running")}) //dont need to return this still it will work

  return [count, increment, decrement];
}
