import React from "react";
import Button from "./Button";
import ConfirmDialog from "./ConfirmDialog";
import Clock from "../Clock/Clock";

function ConfirmDialogs(props){
    return(
        <div>
            <p>
                <ConfirmDialog>내용</ConfirmDialog>
                <br/><br/>
                <ConfirmDialog>내용</ConfirmDialog>
                <br/><br/>
                <ConfirmDialog>내용</ConfirmDialog>
                <Clock></Clock>
            </p>
        </div>
    )
}

export default ConfirmDialogs