import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const MAX_Count = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); //Custom useState 사용

    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() isFull is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_Count);
        console.log(`Current count value: ${count}`)
    }, [count]);

    return(
        <div style={{padding: 20}}>
            <p>{`총 ${count}명을 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull} style={{marginRight: 10}}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red", margin: 15}}>수용할 수 있는 정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;