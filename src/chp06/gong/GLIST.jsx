import React from "react";
import GNOTIFICATION from "./GNOTIFICATION";
const reservedNotifications=[
    {
        id:1,
        message: "안녕하세요~ 오늘의 스케쥴입니다."
    },
    {
        id:2,
        message: "웹프로그래밍응용 수업에 집중해 주세요."
    },
    {
        id:3,
        message: "Git에 Commit 하고 수업을 마치겠습니다."
    }
];
var timer;
class GLIST extends React.Component{
    constructor(props) {
        super(props)

        this.state = {GLIST: []}
    }

    componentDidMount() {

        const newGLIST = this.state.GLIST;

        timer = setInterval(()=>{
            if (this.state.GLIST.length < reservedNotifications.length) {
                const index = newGLIST.length;
                newGLIST[index] = reservedNotifications[index];

                this.setState({GLIST: newGLIST});
            }else {
                clearInterval(timer)
            }

        },2000)
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            this.state.GLIST.map(x=>{
                return(
                    <GNOTIFICATION
                    msg={x.message}
                    key={x.id}/>
                )
            })
        )
    }

}

export default GLIST;