import React from "react";
import UUU from "./UUU";

const sibal = [
    {
    irum: "김종국",
    URL: "http://kopo.safetyedu.org/Content/Upload/Agency/132596798210584782_1.JPG",
    gl: "호랑이"
},

    {
        irum: "유재석",
        URL: "http://kopo.safetyedu.org/Content/Upload/Agency/132596798210584782_1.JPG",
        gl: "메뚜기"
    },
    {
        irum: "이광수",
        URL: "http://kopo.safetyedu.org/Content/Upload/Agency/132596798210584782_1.JPG",
        gl: "기린"
    },
    {
        irum: "지석진",
        URL: "http://kopo.safetyedu.org/Content/Upload/Agency/132596798210584782_1.JPG",
        gl: "임팔라"
    },
    {
        irum: "송지효",
        URL: "http://kopo.safetyedu.org/Content/Upload/Agency/132596798210584782_1.JPG",
        gl: "고양이"
    },
]

function NaeYong(props){
    return(
        sibal.map((sisisisiisbal)=>
        <div>
            <UUU saram={sisisisiisbal}/>
            {sisisisiisbal.gl}
        </div>

        )
    )
}

export default NaeYong;