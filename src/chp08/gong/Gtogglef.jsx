import React, {useState} from "react";

function Gtogglef(){

    const [set,setSet] = useState(false);

    const checkSet = ()=>{
        setSet(set =>!set)
    }

    return(
        <div>
            <button onClick={checkSet}>{set ? "On" : "Off"}</button>
        </div>
    )
}

export default Gtogglef;