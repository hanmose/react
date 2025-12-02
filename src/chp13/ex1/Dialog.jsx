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

function WelcomeDialogs() {
    return (
        <div>
            <Dialog
                title="어서 오세요"
                message="우리 사이트에 방문하신 것을 환영합니다!"
            />
            <Dialog
                title="공지사항"
                message="오늘은 서버 점검이 예정되어 있습니다."
            />
            <Dialog
                title="이벤트"
                message="한정판 레드카펫 입장 이벤트에 참여하세요!"
            />
        </div>
    );
}

export default WelcomeDialogs;
