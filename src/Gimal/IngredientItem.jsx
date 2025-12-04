import React from "react";

function IngredientItem({ id, src, opacity, onDragStart, onDragEnd }) {
    return (
        <img
            id={id}
            src={src}
            className="ingredient"
            draggable={true}
            style={{ opacity: opacity }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        />
    );
}

export default IngredientItem;
