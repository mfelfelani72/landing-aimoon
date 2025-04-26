import React, { useState } from 'react';
import './Gauge.css'; // Optional for styling

const UnifiedGauge = ({
  data = [
    { value: 70, label: 'Sales', color: '#FF4560' },
    { value: 50, label: 'Traffic', color: '#00E396' },
    { value: 30, label: 'Revenue', color: '#775DD0' }
  ],
  width = 300,
  height = 200
}) => {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  
  // Calculate angles
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const angles = data.map(item => ({
    ...item,
    angle: (item.value / total) * 180
  }));

  // SVG Calculations
  const centerX = width / 2;
  const centerY = height;
  const radius = Math.min(width, height * 2) / 2.5;

  // Generate path for segment
  const getSegmentPath = (startAngle, endAngle) => {
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    
    return `M ${centerX},${centerY}
            L ${centerX + radius * Math.cos(startRad)},${centerY + radius * Math.sin(startRad)}
            A ${radius} ${radius} 0 ${endAngle - startAngle > 180 ? 1 : 0} 1
              ${centerX + radius * Math.cos(endRad)},${centerY + radius * Math.sin(endRad)}
            Z`;
  };

  // Generate all segments
  let cumulativeAngle = 0;
  const segments = angles.map((item, i) => {
    const segment = {
      path: getSegmentPath(cumulativeAngle, cumulativeAngle + item.angle),
      startAngle: cumulativeAngle,
      endAngle: cumulativeAngle + item.angle,
      ...item
    };
    cumulativeAngle += item.angle;
    return segment;
  });

  return (
    <div className="gauge-container" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        {/* Background Track */}
        <path
          d={getSegmentPath(0, 180)}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth={radius * 0.4}
          strokeLinecap="round"
        />

        {/* Data Segments */}
        {segments.map((seg, i) => (
          <path
            key={i}
            d={seg.path}
            fill={seg.color}
            opacity={hoveredSegment === i ? 1 : 0.8}
            onMouseEnter={() => setHoveredSegment(i)}
            onMouseLeave={() => setHoveredSegment(null)}
          />
        ))}

        {/* Labels */}
        {segments.map((seg, i) => {
          const midAngle = seg.startAngle + seg.angle / 2;
          const labelX = centerX + (radius * 0.8) * Math.cos(((midAngle - 90) * Math.PI) / 180;
          const labelY = centerY + (radius * 0.8) * Math.sin(((midAngle - 90) * Math.PI) / 180;

          return (
            <text
              key={i}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize={radius * 0.1}
            >
              {seg.value}%
            </text>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredSegment !== null && (
        <div 
          className="gauge-tooltip"
          style={{
            left: `${segments[hoveredSegment].endAngle % 180 > 90 ? '60%' : '40%'}`,
            top: '70%'
          }}
        >
          <strong>{data[hoveredSegment].label}</strong>
          <br />
          {data[hoveredSegment].value}%
        </div>
      )}
    </div>
  );
};

export default UnifiedGauge;