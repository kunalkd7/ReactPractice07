import React, { useState, useCallback, useEffect } from "react";
import CompC from "./HelperComponent/CompC";
import CompD from "./HelperComponent/CompD";
import CompE from "./HelperComponent/CompE";

export function UseCallbackHook() {
  const [count, setCount] = useState(0);
  const [render, setrender] = useState(0);

  //it memoize the function

  //usecallback prevent functions to get reinitialise every time
  //it will only allow it to reinitialise again when the count state gets changes
  //because this func is based on count state that's why we have to pass count
  //depandency in this
  //now comp d wont rerender when render(state) value changes

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  // const incrementCount = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  //along with this child comp should be wrapper in memo to get it worked. memo checks if there is any changes in state
  //which is coming as prop from parent comp only then it will render otherwise it won't render
  //memo also check if there any prop is coming or not if not it won't get render again like <CompE> in this case

  const myfun = useCallback(() => {
    console.log("myfun called");
  }, [count]);

  useEffect(() => {
    //useCallback will stop reinitialise the func again and again it will reinitialise only when count state gets change
    //so this is the rsn myfun will not work everytime when we remove usecallback it will run everytime any state gets changed
    myfun();
  }, [myfun]);

  return (
    <>
      <div>UseCallbackHook</div>
      <CompC count={count} />
      {/* only component d gets rendered even if the count value haven't even changed */}
      {/* it happens cz when react component renders it kind off reinitialise the function again every time */}
      {/* so for component d incrementCount is always a new function */}
      {/* to stop this we can use usecallback hook */}
      <CompD onclick={incrementCount} />
      <CompE />
      <button
        onClick={() => {
          setrender((prevrender) => prevrender + 1);
        }}
      >
        render again {render}
      </button>
    </>
  );
}
