// src/Gimal/Alchemy.jsx
import React, { useState } from "react";
import "./Alchemy.css";

import fireImg from "./image/Jars/Fire-removebg-preview.png";
import waterImg from "./image/Jars/Water-removebg-preview.png";
import leafImg from "./image/Jars/leaf-removebg-preview.png";

import noneJar from "./image/Jars/NoneJar.png";
import blueJar from "./image/Jars/blue.png";
import greenJar from "./image/Jars/green.png";
import redJar from "./image/Jars/red.png";
import mintJar from "./image/Jars/mint.png";
import purpleJar from "./image/Jars/purple.png";
import yellowJar from "./image/Jars/yellow.png";
import whiteJar from "./image/Jars/white.png";

export default function AlchemyJar() {
    // 어떤 재료들이 떨어졌는지 상태로 관리
    const [droppedItems, setDroppedItems] = useState([]); // ["red","blue"...]
    const [draggingId, setDraggingId] = useState(null);   // 지금 드래그 중인 재료 id

    // 🔥 1번: 드롭 이펙트
    const [dropEffect, setDropEffect] = useState(false);

    // 🔥 7번: 항아리 애니메이션 FX
    const [jarFX, setJarFX] = useState(null);

    const ingredients = [
        { id: "red", src: fireImg },
        { id: "blue", src: waterImg },
        { id: "green", src: leafImg },
    ];

    // 조합 -> 항아리 이미지 매핑
    const jarImages = {
        blue: blueJar,
        green: greenJar,
        red: redJar,
        "blue-green": mintJar,
        "blue-red": purpleJar,
        "green-red": yellowJar,
        "blue-green-red": whiteJar,
    };

    // 현재 떨어진 재료들을 정렬해서 key로 사용 (원래 코드와 동일한 로직)
    const sortedKey = [...droppedItems].sort().join("-");
    const currentJarImage = jarImages[sortedKey] || noneJar;

    // 드래그 시작
    const handleDragStart = (id, e) => {
        setDraggingId(id);
        e.dataTransfer.setData("text/plain", id);
    };

    // 드래그 끝 (어디에도 drop 안 됐을 때 복구용)
    const handleDragEnd = () => {
        setDraggingId(null);
    };

    // 드롭 영역 위에서 기본 이벤트 막기 (drop 가능하도록)
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // 실제 drop 처리
    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");

        setDraggingId(null);

        // 이미 들어간 재료는 다시 안 넣음 (Set 로직과 동일)
        if (!droppedItems.includes(id)) {
            setDroppedItems((prev) => [...prev, id]);

            // ✅ 1번: 드롭 이펙트 켜기
            setDropEffect(true);
            setTimeout(() => setDropEffect(false), 500);

            // ✅ 7번: 항아리 FX
            if (id === "red") setJarFX("jar-fire");
            if (id === "blue") setJarFX("jar-water");
            if (id === "green") setJarFX("jar-nature");
            setTimeout(() => setJarFX(null), 800);
        }
    };

    // 리셋 버튼
    const resetJar = () => {
        setDroppedItems([]);
        setDraggingId(null);
        setDropEffect(false);
        setJarFX(null);
    };

    return (
        <div className="page-root">
            {/* 상단 재료 아이콘들 */}
            <div className="ingredients">
                {ingredients.map((item) => {
                    const isDropped = droppedItems.includes(item.id);
                    const isDragging = draggingId === item.id;

                    const opacity = isDropped || isDragging ? 0 : 1;

                    return (
                        <img
                            key={item.id}
                            src={item.src}
                            draggable
                            onDragStart={(e) => handleDragStart(item.id, e)}
                            onDragEnd={handleDragEnd}
                            className="ingredient"
                            style={{ opacity }}
                            alt={item.id}
                        />
                    );
                })}
            </div>

            {/* 항아리 배경 영역 + FX */}
            <div
                className={`wrapper ${jarFX ?? ""}`}
                style={{
                    backgroundImage: `url(${currentJarImage})`,
                }}
            >
                {/* ✅ 1번: 드롭 이펙트 (번쩍) */}
                {dropEffect && <div className="drop-effect" />}

                {/* 드롭 존 */}
                <div
                    className="drop-zone"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                ></div>

                {/* 리셋 버튼 (투명한 영역 그대로) */}
                <div className="reset-button" onClick={resetJar}>
                    ㅤㅤㅤ
                    <br />
                    ㅤㅤㅤ
                    <br />
                    ㅤㅤㅤ
                    <br />
                    ㅤㅤㅤ
                    <br />
                    ㅤㅤㅤ
                </div>
            </div>
        </div>
    );
}
