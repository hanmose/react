import React from "react";

const students = [
    {id: 1, name: "김철수",grade:"2",major:"인공지능소프트웨어"},
    {id: 2, name: "이영희",grade:"1",major:"지능형에너지설비"},
    {id: 3, name: "박민수",grade:"2",major:"클라우드컴퓨팅"},
    {id: 4, name: "김재영",grade:"2",major:"스마트정보통신"},
    {id: 5, name: "박찬웅",grade:"2",major:"메타버스콘텐츠"},
]

function StudentAttendance(){
    return(
        <div>
            <h2>학생 출석부</h2>
            <ul>
                {
                    students.map(student=>(
                        <li key={student.id}>
                            <b>{student.name}</b> - {student.grade}학년, {student.major}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StudentAttendance;