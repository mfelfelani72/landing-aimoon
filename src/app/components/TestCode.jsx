import React from 'react';
import PieChart from '../../features/core/components/PieChart.jsx';


const SemiCirclePieChart = () => {



  const data = [
    {
      name: 'Positive',
      y: 10,
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
        stops: [
          [0, '#B4A2F1'],
          [1, '#B4A2F150']
        ]
      }
    },
    {
      name: 'Negative',
      y: 90,
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
        stops: [
          [0, '#E57C43'],
          [1, '#CC6E3C']
        ]
      },
    },
    {
      name: 'Neutral',
      y: 80,
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
        stops: [
          [0, '#D2D2D5'],
          [1, '#D2D2D500']
        ]
      }
    }
  ]

  return (
    <div className="bg-background">

      <PieChart height={300} width={300} data={data} name="Browser share" title="Out Of 69"  />

    </div>
  );
};

export default SemiCirclePieChart;