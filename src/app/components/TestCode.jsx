import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const SplineChartWithDelete = () => {
  const [seriesData, setSeriesData] = useState([
    {
      name: 'Tokyo',
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 22.8, 17.5, 12.1, 7.6],
      color: '#3B82F6',
      markerSymbol: ''
    },
    {
      name: 'Bergen',
      data: [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6],
      color: '#10B981',
      markerSymbol: ''
    }
  ]);



  // تنظیمات Highcharts
  const chartOptions = {
    chart: {
      type: 'spline',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        color: '#000'
      }

    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      gridLineWidth: 1,
      gridLineColor: '#E57C43',
      labels: {
        style: {
          color: '#9CA3AF'
        }
      },
      min: 0, // Ensure grid lines do not extend to the border
      max: 10
    },
    yAxis: {
      title: {
        text: '',
      },
      gridLineWidth: 1,
      gridLineColor: '#E57C43',
      
      labels: {
        style: {
          color: '#9CA3AF'
        }
      }
    },
    plotOptions: {
      spline: {
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 4
          }
        },
        marker: {
          lineWidth: 1,
          lineColor: '#1F2937',
        }
      },
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function () {
              // console.log('Point clicked', this);
            }
          }
        }
      }
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      backgroundColor: '#1F2937',
      borderColor: '#111827',
      style: {
        color: '#F3F4F6'
      }
    },
    series: seriesData.map(series => ({
      type: 'spline',
      name: series.name,
      data: series.data,
      color: series.color,
      marker: {
        enabled: false,
        lineWidth: 0,
        lineColor: '#'
      }
    }))
  };

  return (
    <div className='mt-10'>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />

    </div>
  );
};

export default SplineChartWithDelete;