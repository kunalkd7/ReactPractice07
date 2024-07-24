import React, { useState, useMemo, useCallback } from "react";

export function UseMemoHook() {
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  //useMemo = when function is returning something   //it memoize the value
  //useCallback = when funtion is not returning anything  //it memoize the function //used when func gets pass in child comp to prevent rerenders of child comp

  //if there is a case when function is returning some value and function getting call directely in the jsx condition
  //then we can use usememo because when it gets called first time it will remember the returned value if any states gets
  //changed other then the dependency state then it won't call the function again in jsx so it saves lot of time
  // note : we just need to write function name without parenthesis to call usememo wrapped function

  const evenCheck = useMemo(() => {
    console.log("function evenCheck called");
    let i = 0;
    while (i < 1000000000) i++;
    return countThree % 2 === 0;
  }, [countThree]);

  return (
    <>
      <button onClick={() => setCountTwo((prevC) => prevC + 1)}>
        count two value
      </button>
      {countTwo} <br />
      <button onClick={() => setCountThree((prevC) => prevC + 1)}>
        count three value
      </button>
      {countThree}
      {/* {evenCheck() ? "true" : "false"} */}
      {evenCheck ? "true" : "false"}
    </>
  );
}
