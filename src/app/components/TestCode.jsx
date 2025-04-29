import React from 'react';
import { DonutChart } from '../../features/core/components/Chart.jsx';




const CleanSplineChart = () => {

  const data = [{
    name: 'Spain',
    y: 150,
    z: 150 / 3 * 100,
    color: "#4caefe",
  }, {
    name: 'France',
    y: 26,
    z: 26 / 3 * 100,
    color: "#3dc3e8",
  }, {
    name: 'Poland',
    y: 68,
    z: 68 / 3 * 100,
    color: "#2dd9db",
  },]

  return (
    <DonutChart data={data} />
  );
};

export default CleanSplineChart;
