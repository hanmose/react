import React, {useState} from "react";

function ConfrimButtonFunction(){
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfrim(){
        setIsConfirmed((prevIsConfirmed)=>!prevIsConfirmed)
    }

    return(
        <div>
            ConfirmButton Test Function Type
            <button onClick={handleConfrim}>{isConfirmed? "Confirm" : "Check"}</button>
        </div>
    );
}

export default ConfrimButtonFunction;