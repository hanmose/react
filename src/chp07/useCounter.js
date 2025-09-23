import React,{useState} from "react";

// custom hook(사용자 정의 훅):useState hook을 사용
function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount = ()=> setCount((count)=>count+1);
    const decreaseCount = () => setCount((count)=> Math.max(count-1, 0));

    return [count, increaseCount, decreaseCount]


}

export default useCounter;