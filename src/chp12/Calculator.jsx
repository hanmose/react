// 사용자 정의 (user-defined):
// - Calculator, tryConvert, toCelsius, toFahrenheit
// - handleCelsiusChange, handleFahrenheitChange
// - temperature, scale, numericCelsius
//
// React/JS 표준 키워드/내장: import, from, function, const, let, return, useState, parseFloat, Number.isNaN, Number.isFinite, export default

import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "./ex1/BoilVerdict";
import "./TemCss.css"; // 필요하면 CSS 파일명 변경하세요

// tryConvert: 문자열 입력을 받아 변환 함수(convert)를 적용한 문자열 반환
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = Math.round(convert(input) * 1000) / 1000;
    return output.toString();
}

// 변환 수식 (user-defined)
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function Calculator() {
    // React 훅 (표준)
    const [temperature, setTemperature] = useState(""); // user-defined state (문자열)
    const [scale, setScale] = useState("c");             // user-defined state: "c" 또는 "f"

    // 사용자가 섭씨 입력(input in °C)을 변경했을 때: scale은 "c"로 설정해야 함
    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale("c"); // <-- 중요: 'c'로 설정 (버그가 있던 곳)
    };

    // 사용자가 화씨 입력(input in °F)을 변경했을 때: scale은 "f"로 설정
    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale("f"); // <-- 중요
    };

    // 핵심 로직(정정):
    // - temperature 상태는 "마지막으로 수정된 입력값"과 그 입력의 단위를 scale로 가짐.
    // - 따라서 다른 단위 값은 "마지막으로 수정된 단위"를 반대로 변환해야 함.
    //
    // celsius는 만약 마지막 입력이 화씨(scale === "f")라면 (화씨 -> 섭씨) 변환,
    // 그렇지 않으면(마지막 입력이 섭씨) 그대로 temperature 값을 사용.
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    // fahrenheit는 만약 마지막 입력이 섭씨(scale === "c")라면 (섭씨 -> 화씨) 변환,
    // 그렇지 않으면(마지막 입력이 화씨) 그대로 temperature 값을 사용.
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    // 숫자형 섭씨 값(BoilVerdict, kettle 시각화용)
    const numericCelsius = parseFloat(celsius);

    return (
        <div className="kv-fieldset" role="region" aria-label="온도 측정기">
            <div className="kv-legend">모던 주전자 온도계</div>

            <div className="kv-row">
                <div>
                    <TemperatureInput
                        scale="c"
                        temperature={celsius}
                        onTemperatureChange={handleCelsiusChange}
                    />
                    <TemperatureInput
                        scale="f"
                        temperature={fahrenheit}
                        onTemperatureChange={handleFahrenheitChange}
                    />

                    <div style={{ marginTop: 10 }}>
                        <BoilVerdict celcius={numericCelsius} />
                    </div>
                </div>

                {/* 아래 주전자는 CSS(Kettle.css)에 맞춰 DOM을 배치한 예시입니다. */}
                <div className={`kettle ${Number.isFinite(numericCelsius) && numericCelsius >= 100 ? "boil" : ""}`}>
                    <div className="kettle-temp">
                        {Number.isFinite(numericCelsius) ? `${Math.round(numericCelsius * 10) / 10} °C` : "온도 미입력"}
                    </div>
                    <div className="kettle-body">
                        <div className="kettle-lid" />
                        <div className="kettle-handle" />
                        <div className="kettle-spout" />
                        <div className="kettle-water" />
                        <div className="bubble b1" />
                        <div className="bubble b2" />
                        <div className="bubble b3" />
                        <div className="bubble b4" />
                        <div className="bubble b5" />
                        <div className="steam s1" />
                        <div className="steam s2" />
                        <div className="steam s3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
