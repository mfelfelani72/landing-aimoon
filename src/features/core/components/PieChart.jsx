import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ className, ...props }) => {
    const customColors = [
        {
            linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
            stops: [
                [0, '#B4A2F1'],
                [1, '#B4A2F150']
            ]
        },
        {
            linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
            stops: [
                [0, '#E57C43'],
                [1, '#CC6E3C']
            ]
        },
        {
            linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
            stops: [
                [0, '#D2D2D500'],
                [1, '#D2D2D5']
            ]
        }
    ];

    const chartOptions = {
        chart: {
            type: 'pie',
            height: props?.height,
            width: props?.width,
            backgroundColor: 'transparent',
            plotBackgroundColor: 'transparent',
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: null,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits: {
            enabled: false
        },
        colors: customColors,
        plotOptions: {
            pie: {
               
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textOutline: 'none'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '50%'],
                size: '100%',
                borderWidth: 0,
                borderRadius: 5,
                states: {
                    hover: {
                        brightness: 0.1
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '85%',
            borderWidth: 0,
            data: [
                {
                    name: 'Chrome',
                    y: 58.9,
                    borderRadius: 100, // روی هر نقطه
                    color: customColors[0]
                },
                {
                    name: 'Firefox',
                    y: 13.29,
                    borderRadius: 0,
                    color: customColors[1]
                },
                {
                    name: 'Internet Explorer',
                    y: 36,
                    borderRadius: 100,
                    color: customColors[2]
                }
            ]
        }]
    };

    return (
        <div style={{ height: props?.height, width: props?.width }} className={`inline-block ${className}`}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    )
}

export default PieChart;