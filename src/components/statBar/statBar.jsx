import React from "react";
import "./statBar.css";

const minValue = 0; 
const maxValue = 140;

const getStatColor = (value) => {
    // normalize the value
    const normalizedValue = Math.min(Math.max(value, minValue), maxValue) / maxValue;

    // get the color
    const r = Math.round(255 * (1 - normalizedValue)); // red go down when value go up
    const g = Math.round(255 * normalizedValue); // green go up when value go middle
    const b = Math.round(255 * (normalizedValue - 0.5 ) * 2); // blue go up as value go up

    return `rgb(${r}, ${g}, ${b})`;
};

const StatBar = ({ stat, value }) => {
    const barWidth = (value / maxValue) * 100;
    const barColor = getStatColor(value);

    return (
        <div className="stat-line">
            <span className="stat-label">{stat}</span>
            <div className="stat-bar-bg">
                <div
                    className="stat-bar"
                    style={{
                        width: barWidth, // adjust bar width based on value
                        backgroundColor: barColor, // apply custom color
                    }}
                ></div>
            </div>
            <span className="stat-value">{value}</span>
        </div>
    );
};

export default StatBar;