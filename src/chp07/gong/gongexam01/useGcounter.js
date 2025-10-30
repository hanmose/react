import React, {useState} from "react";

function useGcounter(inti){

    const [count,setCount] = useState(inti)

    function increaseCount(){
        setCount(count=>count+1);
    }

    function decreaseCount(){
        setCount(count=>Math.max(count-1,0));
    }

    return [count,increaseCount,decreaseCount]
}

export default useGcounter;