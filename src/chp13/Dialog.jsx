import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="gold">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    );
}

export default WelcomeDialog;
