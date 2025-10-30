import React from "react";
import './Attendancecar.css'
import img6 from './imgs/6.png'

const students = [
    {id: 1, name: "김철수",grade:"2",major:"인공지능소프트웨어",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},
    {id: 2, name: "이영희",grade:"1",major:"지능형에너지설비",avatar:"https://randomuser.me/api/portraits/women/1.jpg"},
    {id: 3, name: "박민수",grade:"2",major:"클라우드컴퓨팅",avatar:"https://randomuser.me/api/portraits/men/2.jpg"},
    {id: 4, name: "김재영",grade:"2",major:"스마트정보통신",avatar:"https://randomuser.me/api/portraits/men/4.jpg"},
    {id: 5, name: "박찬웅",grade:"2",major:"메타버스콘텐츠",avatar:"https://randomuser.me/api/portraits/women/5.jpg"},
    {id: 6, name: "홍정민",grade:"2",major:"인공지능어쩌구",avatar:img6},
    {id: 7, name: "방신실",grade:"2",major:"스마트어쩌구",avatar:"https://randomuser.me/api/portraits/men/8.jpg"},
    {id: 8, name: "윤이나",grade:"2",major:"기계시스템어쩌구",avatar:"https://randomuser.me/api/portraits/women/32.jpg"},
    ]

function AttendanceCard(){
    return(
        <div className={"attendance-container"}>
            <h2 className={"attendance-title"}>학생 출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student)=>(
                        <div className={"student-card"}>
                            <img src={student.avatar} alt={student.name}/>
                            <div>
                                <h3>{student.name}</h3>
                                <p>{student.grade} - {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AttendanceCard;
