import React, { useState } from "react";
function ToggleFunction() {
    // Hook(클래스형 컴포넌트의 state와 같은 역할)
    const [isToggleOn, setIsToggleOn] = useState(true);
    // 1. Handler를 함수로 정의
    // function handleClick() {
    //   setIsToggleOn((isToggleOn) => !isToggleOn);
    // }
    const handleClick = ()=> {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };

    return(
        <div align="center" style={{margin: 200}}>
            <button onClick={handleClick}>
                Function Type2 Component: {isToggleOn ? "On" : "Off"}
            </button>
        </div>
    );
}

export default ToggleFunction;
