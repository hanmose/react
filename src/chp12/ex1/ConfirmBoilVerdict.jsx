import React, { useState } from "react";                 // _import_, _React_, _useState_
import BoilVerdict from "./BoilVerdict";                 // _import_
import "./Geometric.css";                                   // _import_, **Kettle.css** (사용자 정의 파일)

function ConfirmBoilVerdict(){                           // **ConfirmBoilVerdict**
    const [temperature, setTemperature] = useState("");    // **temperature**, **setTemperature** / _useState_
    const handlTemperature = (event) => {                  // **handlTemperature**
        setTemperature(event.target.value);                  // _event.target.value_
    };

    const tempNum = Number(temperature);                   // **tempNum**
    const isBoiling = !Number.isNaN(tempNum) && tempNum >= 100; // **isBoiling**

    return (                                               // _return_
        <fieldset className="kv-fieldset">                   {/* **kv-fieldset** */}
            <legend className="kv-legend">섭씨 온도를 입력하세요</legend> {/* **kv-legend** */}

            <div className="kv-row">                           {/* **kv-row** */}
                <input
                    className="kv-input"                           /* **kv-input** */
                    type="number"
                    inputMode="numeric"
                    placeholder="예: 95"
                    value={temperature}                             // _value_
                    onChange={handlTemperature}                     // _onChange_
                />

                {/* 주전자 프리뷰 */}
                <div className={`kettle ${isBoiling ? "boil" : ""}`} aria-label="주전자 미리보기">  {/* **kettle**, **boil** */}
                    <div className="kettle-body">
                        <div className="kettle-water">
                            {/* 거품 여러 개 */}
                            <span className="bubble b1" />
                            <span className="bubble b2" />
                            <span className="bubble b3" />
                            <span className="bubble b4" />
                            <span className="bubble b5" />
                        </div>
                        <div className="kettle-lid" />
                        <div className="kettle-handle" />
                        <div className="kettle-spout" />
                        {/* 수증기 */}
                        <div className="steam s1" />
                        <div className="steam s2" />
                        <div className="steam s3" />
                    </div>
                    <div className="kettle-temp">{Number.isNaN(tempNum) ? "—" : `${tempNum}°C`}</div> {/* **kettle-temp** */}
                </div>
            </div>

            <BoilVerdict celcius={parseInt(temperature)} />     {/* **BoilVerdict**, _parseInt_ */}
        </fieldset>
    );
}

export default ConfirmBoilVerdict;                        // _export default_
