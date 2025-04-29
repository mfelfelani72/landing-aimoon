import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import VariablePie from 'highcharts/modules/variable-pie';



const CleanSplineChart = () => {
  const chartOptions = {
    chart: {
      type: 'variablepie'
    },
    title: {
      text: 'Countries compared by population density and total area, 2024'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '30%',
      zMin: 0,
      name: 'Countries',
      data: [{
        name: 'Spain',
        y: 505992,
        z: 95
      }, {
        name: 'France',
        y: 551695,
        z: 118
      }, {
        name: 'Poland',
        y: 312679,
        z: 131
      },],
      colors: [
        '#4caefe',
        '#3dc3e8',
        '#2dd9db',
      ]
    }]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default CleanSplineChart;
