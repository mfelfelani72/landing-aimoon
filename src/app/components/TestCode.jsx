import React, { useState } from 'react';
import { LineChart } from '../../features/core/components/Chart.jsx';


const CleanSplineChart = () => {
  const [data] = useState([
    {
      name: 'Tokyo',
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 22.8, 17.5, 12.1, 7.6],
      color: '#3B82F6'
    },
    {
      name: 'Bergen',
      data: [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6],
      color: '#10B981'
    },
    {
      name: 'dsfsdf',
      data: [1.6, 3.3, 5.9, 10.5, 13.5, 12, 15, 11.5, 8.7, 4.7, 2.6],
      color: '#54dfd5'
    }
  ]);



  return (
    <div className="mt-10 w-[20rem] mx-[1rem]">
      <LineChart data={data} />
    </div>
  );
};

export default CleanSplineChart;