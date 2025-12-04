import React, { useState } from "react";
import IngredientItem from "./IngredientItem";
import "./alchemy.css";

import JarNone from "./image/Jars/NoneJar.png";
import JarBlue from "./image/Jars/blue.png";
import JarGreen from "./image/Jars/green.png";
import JarRed from "./image/Jars/red.png";
import JarMint from "./image/Jars/mint.png";
import JarPurple from "./image/Jars/purple.png";
import JarYellow from "./image/Jars/yellow.png";
import JarWhite from "./image/Jars/white.png";

import FireImg from "./image/Jars/Fire-removebg-preview.png";
import WaterImg from "./image/Jars/Water-removebg-preview.png";
import LeafImg from "./image/Jars/leaf-removebg-preview.png";

function Alchemy() {
    const [droppedItems, setDroppedItems] = useState(new Set());
    const [currentDragged, setCurrentDragged] = useState(null);

    const [opacityState, setOpacityState] = useState({
        red: 1,
        blue: 1,
        green: 1,
    });

    const jarImages = {
        "": JarNone,
        blue: JarBlue,
        green: JarGreen,
        red: JarRed,
        "blue-green": JarMint,
        "blue-red": JarPurple,
        "green-red": JarYellow,
        "blue-green-red": JarWhite,
    };

    const [jarImage, setJarImage] = useState(JarNone);

    const handleDragStart = (event) => {
        const id = event.target.id;
        setCurrentDragged(id);

        setOpacityState((prev) => ({
            ...prev,
            [id]: 0,
        }));
    };

    const handleDragEnd = () => {
        if (currentDragged && !droppedItems.has(currentDragged)) {
            setOpacityState((prev) => ({
                ...prev,
                [currentDragged]: 1,
            }));
        }
        setCurrentDragged(null);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const id = currentDragged;
        if (!id) return;
        if (droppedItems.has(id)) return;

        const newSet = new Set(droppedItems);
        newSet.add(id);
        setDroppedItems(newSet);

        updateJarImage(newSet);
    };

    const updateJarImage = (setData) => {
        const sorted = Array.from(setData).sort().join("-");

        const file = jarImages[sorted] || JarNone;
        setJarImage(file);
    };

    const handleReset = () => {
        setDroppedItems(new Set());
        setOpacityState({ red: 1, blue: 1, green: 1 });
        setJarImage(JarNone);
    };

    return (
        <div className="wrapper" style={{ backgroundImage: `url(${jarImage})` }}>
            <div className="ingredients">
                <IngredientItem
                    id="red"
                    src={FireImg}
                    opacity={opacityState.red}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />

                <IngredientItem
                    id="blue"
                    src={WaterImg}
                    opacity={opacityState.blue}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />

                <IngredientItem
                    id="green"
                    src={LeafImg}
                    opacity={opacityState.green}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />
            </div>

            <div
                className="drop-zone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            />

            <div className="reset-button" onClick={handleReset}>
                ㅤㅤㅤ<br />ㅤㅤㅤ<br />ㅤㅤㅤ<br />ㅤㅤㅤ<br />ㅤㅤㅤ
            </div>
        </div>
    );
}

export default Alchemy;
