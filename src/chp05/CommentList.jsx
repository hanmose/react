import React from "react";
import Comment from "./Comment";

const comments= [
    {
        name:"이찬혁",
        comment:"어느새 부터 힙합은 안멋져",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl01gaGV66_30xSTD7BckCxUtWQrAzn1hkuw&s"
    },
    {
        name:"아이유",
        comment:"까만하늘 귀뚜라미 울음소리",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5qpQJiwtbZSCG475br66XHbuWNYVHxjPgA&s"
    },
    {
        name:"이무진",
        comment:"그 사이 삼 초 그 짧은 시간",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKzbElcxqmxrFng5c1m2Yvn9IhhQSywvBjw&s"
    }
];

function CommentList(){
    return(
        <div>
            {
                comments.map(comment=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                    )
                    }
                )
            }
        </div>
    )
}

export default CommentList;