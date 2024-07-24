import React, { useState, useEffect } from "react";

export function UseEffectHook() {
  //whenever state changes component gets rerender
  // console.log("i am here");
  const [count, setCount] = useState(0);
  //without array it will work everytime
  //with array it will work only one time
  //array with dependencies it will work when the dependencies - state changes
  //It has componentdidmount componentdidupdate and componentwillunmount
  useEffect(() => {
    console.log("useeffect running all the time");
  });

  useEffect(() => {
    console.log("useeffect runs only once");
    //any cleanup code can be written inside the return funtion in useeffect hook
    //suppose we have added a event listner on window in componentdidmount when the component gets removed from the dom
    //event will not gonna remove itself because it's an event so we have to remove it manually in componentwillunmount
    return () => {
      //if we pass [] array componentwillunmount it will run only once gets removed from the dom
      //if we pass [] with dependency or not passing anything at all in second argument then it will run each time 
      //when states gets changed and everytime in case of no arguement
      //in the case of [] with dependency or not passing any args it won't run the first time it will start running from the
      //second time onwords when state gets changed note: it will run just before useEffect runs and this cycle continues.
      console.log("return function runs");
    };
  },[]);

  useEffect(() => {
    //it runs inititally and whenever count state gets change
    console.log("useeffect runs when only count state changes");
  }, [count]);

  return (
    <>
      {/* {console.log("render")} */}
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment Count
      </button>
      <br />
      value of count : {count}
    </>
  );
}
