import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import "./Distance.css";   // ★ 도로 스타일 CSS

function toKilometers(miles){
    return miles * 1.60934;
}

function toMiles(km){
    return km / 1.60934;
}

function DistanceConverter(){
    const [distance, setDistance] = useState("");
    const [unit,setUnit] = useState("km");

    const handleKilometerChange = (distance)=>{
        setDistance(distance);
        setUnit("km")
    };
    const handleMileChange = (distance)=>{
        setDistance(distance);
        setUnit("mile")
    };

    const kilometers = unit === "mile" ? toKilometers(parseFloat(distance)) : distance;
    const miles = unit === "km" ? toMiles(parseFloat(distance)) : distance;

    return(
        <div className="road-root">
            {/* 전체 화면이 도로 */}
            <div className="road-lane">
                {/* 이 안이 도로 위에 있는 UI */}
                <div className="road-content">
                    <h1 className="road-title">거리 단위 변환기</h1>

                    <div className="road-inputs">
                        <DistanceInput
                            unit={"km"}
                            distance={Math.round(kilometers*1000)/1000}
                            onDistanceChange={handleKilometerChange}
                        />
                        <DistanceInput
                            unit={"mile"}
                            distance={Math.round(miles*1000)/1000}
                            onDistanceChange={handleMileChange}
                        />
                    </div>

                    <p className="road-result">
                        {kilometers}km 는 {miles}마일입니다.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default DistanceConverter;
