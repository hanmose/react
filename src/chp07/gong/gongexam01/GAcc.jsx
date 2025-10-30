import React, {use, useEffect, useState} from "react";
import useGcounter from "./useGcounter";
import {findAllByDisplayValue} from "@testing-library/dom";

function GAcc(){

    const [full,setFull] = useState(false)

    const [count,increaseCount,decreaseCount] = useGcounter(0);

    useEffect(()=>
        setFull(count >= 10)
    )

    return(
        <div>
            <button onClick={increaseCount} disabled={full}>+</button>
            <button onClick={decreaseCount}>-</button>
            <h1>{
                count
            }</h1>
        </div>
    )
}

export default GAcc;