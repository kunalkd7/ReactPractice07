import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffectHook = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    //basically the stages of component is first it creates a virtual dom then updates the real dom then useeffect runs
    //but useLayoutEffect runs after virtual dom gets created and it is sync in nature so it won't let paint the real dom
    //until it gets executed
    //it runs after virtual dom gets created and useeffect runs after real dom gets created

    console.log("uselayouteffect")
    for(let i = 0; i < 10000000000; i++){}
    if (elementRef.current) {
      const elementWidth = elementRef.current.offsetWidth;
      //if we change the state inside uselayouteffect it won't run the real dom after virtual dom instead it updates the state right away
      //then components gets rerender with new state value
      setWidth(elementWidth);
    }
  }, []);

//   useEffect(()=>{
//     console.log("useEffect")
//     //it will run when virtual dom created and it updated the real dom as well after that useeffect will work
//     for(let i = 0; i < 10000000000; i++){}
//     if (elementRef.current) {
//         const elementWidth = elementRef.current.offsetWidth;
//         setWidth(elementWidth);
//       }
//   },[])

  return (
    <div>
        {console.log("render")}
      <div ref={elementRef} style={{ width: '50%' }}>
        Measure my width
      </div>
      <p>Element width: {width}px</p>
    </div>
  );
};

export default UseLayoutEffectHook;