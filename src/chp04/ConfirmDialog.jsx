import React from "react";
import Button from "./Button";
import Clock from "../Clock/Clock";


function  ConfirmDialog(props){
    return(
        <div className="contain">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;내용을 확인한 후 버튼을 눌러주세요</p>
            <br/>
            <Button color='green'>확인</Button>&nbsp;
            <Button color='blue'>취소</Button>&nbsp;
            <Button color='red'>초기화</Button>&nbsp;

        </div>
    )
}

export default ConfirmDialog