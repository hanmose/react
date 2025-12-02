import React from "react";
// Card 컴포넌트가 ProfileCard와 같은 디렉토리에 있다고 가정합니다.
import Card from "./Card";

function ProfileCard() {
    return (
        // Card 컴포넌트를 사용하며 title prop을 전달합니다.
        <Card title={"AI Specialist"}>
            {/* 자식 요소 (children) */}
            <p>안녕하세요. 김인공입니다.</p>
            <p>저는 Fullstack 개발자가 되기 위한 공부중입니다.</p>
        </Card>
    );
}

// ProfileCard 컴포넌트를 외부로 내보냅니다.
export default ProfileCard;