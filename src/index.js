import React from "react";
import ReactDOM from "react-dom/client";
import { UseStateHook } from "./Components/ReactHooks/UseStateHook";
import { UseEffectHook } from "./Components/ReactHooks/UseEffectHook";
import { UseContextHook } from "./Components/ReactHooks/UseContextHook";
import { UseCallbackHook } from "./Components/ReactHooks/UseCallbackHook";
import { UseMemoHook } from "./Components/ReactHooks/UseMemoHook";
import { UseRefHook } from "./Components/ReactHooks/UseRefHook";
import CompOne from "./Components/CutomHooks/CompOne";
import CompTwo from "./Components/CutomHooks/CompTwo";
import CompThree from "./Components/CutomHooks/CompThree";
import { ParentComp } from "./Components/changingParentStateFromChild/ParentComp";
import First from "./Components/HOC/First";
import Second from "./Components/HOC/Second";
import HOC from "./Components/HOC/HOC";

import "./index.css";
import UseLayoutEffectHook from "./Components/ReactHooks/UseLayoutEffectHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <UseStateHook /> */}
    {/* <UseEffectHook /> */}
    <UseLayoutEffectHook />
    {/* <UseContextHook /> */}
    {/* <UseCallbackHook /> */}
    {/* <UseMemoHook /> */}
    {/* <UseRefHook /> */}
    {/* <CompOne /> */}
    {/* custom hooks create different instance for each component ex comp a count value is 5 but comp b count value will be 0 by default*/}
    {/* <CompTwo />
    <CompThree /> */}
    {/* <ParentComp /> */}
    {/* <First /> */}
    {/* <Second /> */}
  </>
);
