// 사용자 정의 이름: SignUp, handleSubmit, name, setName, email, setEmail, pw, setPw, gender, setGender, interest, setInterest
// React/JS 키워드/개념: import, React, useState, function, return, form, onSubmit, event.preventDefault, alert, value, onChange

import React, { useState } from "react";
import "./SignUpChess.css"; // ← 체스 스타일 CSS 추가

function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [gender, setGender] = useState("male");
    const [interest, setInterest] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // 폼 새로고침 방지
        alert(`입력된 성명: ${name}
입력된 이메일: ${email}
입력된 비밀번호: ${pw}
입력된 성별: ${gender}
입력된 관심사: ${interest}`);
    };

    return (
        <div className="chess-wrap">
            <div className="signup-card">
                <h2 className="title">회원가입</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <label className="field">
                        <span className="label">성명</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(event)=> setName(event.target.value)}
                            required
                            className="input"
                            placeholder="홍길동"
                        />
                    </label>

                    <label className="field">
                        <span className="label">이메일</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                            required
                            className="input"
                            placeholder="name@example.com"
                        />
                    </label>

                    <label className="field">
                        <span className="label">비밀번호</span>
                        <input
                            type="password"
                            value={pw}
                            onChange={(event)=> setPw(event.target.value)}
                            required
                            className="input"
                            placeholder="●●●●●●●●"
                        />
                    </label>

                    <label className="field">
                        <span className="label">성별</span>
                        <select
                            value={gender}
                            onChange={(event)=> setGender(event.target.value)}
                            className="select"
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </label>

                    <label className="field">
                        <span className="label">관심사</span>
                        <textarea
                            value={interest}
                            onChange={(event)=> setInterest(event.target.value)}
                            className="textarea"
                            placeholder="체스, 개발, 독서..."
                        />
                    </label>

                    <button type="submit" className="submit-btn">
                        <span className="piece">♔</span> 가입하기
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
