import React, { useState } from 'react';

const District = ({ name, trafficData, onClick }) => {
    const handleClick = () => {
        onClick(name);
    };

    return (
        <div
            className={`p-4 m-2 rounded-lg cursor-pointer ${trafficData.level === 'high' ? 'bg-red-500' : trafficData.level === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}
            onClick={handleClick}
        >
            <h2 className="text-xl font-bold">{name}</h2>
            <p>High: {trafficData.high}</p>
            <p>Medium: {trafficData.medium}</p>
            <p>Low: {trafficData.low}</p>
        </div>
    );
};

export default District;