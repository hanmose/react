import React from "react";

const  reservedNotifications =[
    {
        id:1,
        message: "안녕하세요 오늘의 스케줄입니다."
    },
    {
        id:2,
        message: "웹프로그래밍응용 수업에 집중해주세요.."
    },
    {
        id:3,
        message: "Git에 커밋하고 수업을 마치겠습니다"
    }
];

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          notifications: []
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return
        <div>

        </div>
    }
}

export default NotificationList;