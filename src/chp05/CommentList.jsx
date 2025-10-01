import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"방신실",
        comment: "우승을 축하드립니다.",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
    },
    {
        name:"홍정민",
        comment: "건강한 모습으로 만나요.",
        url: "https://www.vhv.rs/dpng/d/1-17988_sad-cartoon-person-png-transparent-png.png"
    },
    {
        name:"박성현",
        comment: "오랜만에 멋진 모습 좋았습니다.",
        url: "https://www.vhv.rs/dpng/d/510-5107318_avatar-person-icon-png-transparent-png.png"
    }
];

function CommentList() {
    return(
        <div>
            {
                comments.map((comment) => {
                        return(
                            <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default CommentList;