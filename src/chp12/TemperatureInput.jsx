import React from "react";

const scaleNames = {
    c: "섭씨 (°C)",
    f: "화씨 (°F)",
};

function TemperatureInput(props) {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };

    return (
        /* fieldset은 Kettle.css에 맞춰 기본 스타일로 사용 */
        <fieldset>
            <legend className="kv-legend">온도를 입력하세요: {scaleNames[props.scale]}</legend>
            <input
                className="kv-input"
                type="text"
                value={props.temperature}
                onChange={handleChange}
                placeholder={props.scale === "c" ? "예: 95" : "예: 203"}
            />
        </fieldset>
    );
}

export default TemperatureInput;
