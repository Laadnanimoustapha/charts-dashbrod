import React from 'react';

const ChartCard = ({ title, description, children, className = "" }) => {
  return (
    <div className={`chart-card ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chart-container">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;