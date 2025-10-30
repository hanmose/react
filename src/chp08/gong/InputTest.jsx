import React, {useState} from "react";

function InputTest(){
    const [valued,setValued] = useState("")


    return(
        <div>
            <input type="text" onChange={(event)=>setValued(event.target.value)}/>
            <h1>{valued}</h1>
        </div>
    )
}

export default InputTest;