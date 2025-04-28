import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const CleanSplineChart = () => {
  const [seriesData] = useState([
    {
      name: 'Tokyo',
      data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, 22.8, 17.5, 12.1, 7.6],
      color: '#3B82F6'
    },
    {
      name: 'Bergen',
      data: [1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6],
      color: '#10B981'
    }
  ]);

  const chartOptions = {
    chart: {
      type: 'spline',
      backgroundColor: 'transparent',
      plotBorderWidth: 0,
      spacing: [0, 0, 0, 0], // حذف تمام حاشیه‌ها [top, right, bottom, left]
      style: {
        fontFamily: 'inherit'
      }
    },
    title: {
      text: ''
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
      lineWidth: 1,      // نمایش خط محور x
      lineColor: '#000', // رنگ خط محور
      tickLength: 0,     // حذف خطوط کوچک کنار محور
      labels: {
        style: {
          color: '#9CA3AF'
        }
      },
      gridLineDashStyle: 'Dash', // خطوط گرید به صورت خط چین
      endOnTick: false, // حذف خط گرید انتهایی
      startOnTick: false // حذف خط گرید ابتدایی
    },

    yAxis: {
      title: {
        text: '',
      },
      gridLineWidth: 1,
      gridLineColor: '#E57C43',
      gridLineDashStyle: 'Dash',
      lineWidth: 1,      // نمایش خط محور y
      lineColor: '#000', // رنگ خط محور
      tickLength: 0,     // حذف خطوط کوچک کنار محور
      labels: {
        style: {
          color: '#9CA3AF'
        }
      },
      endOnTick: false, // حذف خط گرید انتهایی
      startOnTick: false // حذف خط گرید ابتدایی
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
          enabled: false // حذف کامل نقاط روی خط
        }
      },
      series: {
        cursor: 'pointer'
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
      color: series.color
    }))
  };

  return (
    <div className="mt-10">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default CleanSplineChart;