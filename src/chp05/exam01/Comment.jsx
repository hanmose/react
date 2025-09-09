import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css'

const users = [
    {
        name:"진돗개",
        comment: "귀여워",
        avatarUrl: "https://flexible.img.hani.co.kr/flexible/normal/958/638/imgdb/original/2021/0414/20210414501879.jpg"
    },
    {
        name:"사모예드",
        comment: "따뜻해",
        avatarUrl: "https://i.namu.wiki/i/dopDZWY3q8zsK29hdQ03zYt4Iqk_yepA4cwleYHw9iAHReb61tlVQhZg54ESthf0huX58PeXSw45tMtO0sUJiA.webp"
    },
    {
        name:"리트리버",
        comment: "착해",
        avatarUrl: "https://img.famtimes.co.kr/resources/2018/01/09/TcWMbm5ebLGddVWE.jpg"
    }

]

function Comment(props) {
    const currentDate = new Date();
    return (
        <div>
            {
                users.map((user) => (
                <div className="comment">
                    <UserInfo user={user}/>
                    <div className="comment-txt">
                        {user.comment}
                    </div>
                    <div className="comment-date">
                        {currentDate.toDateString()}
                    </div>
                </div>
            ))
            }
        </div>
    );
}


export default Comment;