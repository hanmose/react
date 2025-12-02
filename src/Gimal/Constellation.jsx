import React, { useEffect } from "react";
import "./Constellation.css";
import bgNight from "./image/ExNight.png"; // ⭐ Alchemy와 동일한 import 방식

export default function Constellation() {
    useEffect(() => {
        const STAR_INTERVAL = 100;

        const colors = [
            "255, 255, 255",
            "255, 200, 200",
            "200, 255, 255",
            "200, 255, 200",
            "255, 255, 200",
            "255, 220, 180",
        ];

        function createShootingStar() {
            const star = document.createElement("div");
            star.classList.add("shooting-star");

            const width = 2 + Math.random() * 3;
            const height = 120 + Math.random() * 80;

            star.style.width = `${width}px`;
            star.style.height = `${height}px`;

            const color = colors[Math.floor(Math.random() * colors.length)];
            star.style.background = `linear-gradient(to top, rgba(${color},1), rgba(${color},0))`;

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight * 0.3;

            const angle = 70 + Math.random() * 40;
            const rad = (angle * Math.PI) / 180;

            const distance = 800 + Math.random() * 300;
            const dx = Math.cos(rad) * distance;
            const dy = Math.sin(rad) * distance;

            star.style.left = `${startX}px`;
            star.style.top = `${startY}px`;

            document.body.appendChild(star);

            requestAnimationFrame(() => {
                star.style.transform = `translate(${dx}px, ${dy}px)`;
                star.style.opacity = 0;
            });

            setTimeout(() => star.remove(), 2300);
        }

        const interval = setInterval(createShootingStar, STAR_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="star-container"
            style={{ backgroundImage: `url(${bgNight})` }}
        >
            <div className="group a"></div>
            <div className="group b"></div>
            <div className="group c"></div>
            <div className="group d"></div>
            <div className="group e"></div>

            <div className="center-text a-text">Ursa Major</div>
            <div className="center-text b-text">Cassiopei</div>
            <div className="center-text c-text">Cygnus</div>
            <div className="center-text d-text">Orion</div>
            <div className="center-text e-text">Leo</div>
        </div>
    );
}
