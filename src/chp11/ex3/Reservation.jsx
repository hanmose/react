import React, {useState} from "react";
import "./tradtionCss.css"; // ← CSS 추가

function Reservation(){
    const [haveBreakfast, setHaveBreakfast] = useState(false)
    const [numberOfGuest, setNumberOfGuest] = useState(2)

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`)
    }

    return(
        <form onSubmit={handleSubmit} className="han-form">
            <label className="han-label">
                아침식사 여부:
                <input type="checkbox" checked={haveBreakfast} onChange={(event)=>{
                    setHaveBreakfast(event.target.checked)
                }} className="han-input"/>
            </label>

            <label className="han-label">
                방문객 수:
                <input type="number" value={numberOfGuest} onChange={(event)=>{
                    setNumberOfGuest(event.target.value)
                }} className="han-input"/>
            </label>

            <button type="submit" className="han-button">제출</button>
        </form>
    )
}

export default Reservation;
