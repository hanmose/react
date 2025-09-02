import React from "react";
import Button from "./Button";
import ConfirmDialog from "./ConfirmDialog";

function ConfirmDialogs(props){
    return(
        <div>
            <p>
                <ConfirmDialog>내용</ConfirmDialog>
                <br/>br
                <ConfirmDialog>내용</ConfirmDialog>
                <br/><br/>
                <ConfirmDialog>내용</ConfirmDialog>
            </p>
        </div>
    )
}

export default ConfirmDialogs