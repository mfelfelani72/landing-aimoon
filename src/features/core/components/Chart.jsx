import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import VariablePie from 'highcharts/modules/variable-pie';

// Functions

import { cn } from "../../../../utils/lib/cn"

export const PieChart = ({ className, ...props }) => {

    const findMaxData = () => {
        if (!props?.data?.length) return null;

        let maxItem = props.data[0];

        props.data.forEach(item => {
            if (item.y > maxItem.y) {
                maxItem = item;
            }
        });
        return {
            max: maxItem.y,
            color: maxItem.color
        };
    };



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
            pointFormat: '<span>{series.name}   <br>{point.percentage:.1f}%</b></span>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        credits: {
            enabled: false
        },
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
                borderRadius: 2,
                states: {
                    hover: {
                        brightness: 0.1
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: props?.name,
            innerSize: '90%',
            borderWidth: 0,
            data: props?.data
        }]
    };

    return (
        <>
            <div style={{ height: props?.height / 2 + 30, width: props?.width }} className='relative'>
                <div className="absolute z-20">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                </div>
                <div className='absolute bottom-0 inset-x-0 w-full grid grid-cols-3 px-2 left-to-right'>
                    {props?.data?.map((item, index) => (

                        <div key={index} className="inline-flex justify-center items-center gap-1">
                            <div style={{ backgroundColor: item?.color?.stops[0][1] }} className={`w-2 h-2 rounded-full`}></div>
                            <div className='text-Neutral-200 text-sm font-normal leading-tight'>{item?.name}</div>
                        </div>
                    ))}
                </div>
                <div className={`absolute w-full h-full top-0 mt-4 inline-flex justify-center items-center text-2xl font-medium`}>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <div style={{ color: findMaxData().color?.stops[0][1] }}>
                            {parseInt(findMaxData().max * 100)}%
                        </div>
                        <div className='text-Neutral-200 text-sm font-normal leading-none text-center'>
                            {props?.title}
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export const LineChart = ({ className, ...props }) => {

    const chartOptions = {
        chart: {
            backgroundColor: 'transparent',
            spacing: [0, 0, 0, 0],
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        legend: {
            itemStyle: {
                color: '#fff',
                fontWeight: 'normal'
            },
            itemHoverStyle: {
                color: '#E57C43'
            },
            useHTML: true,
            symbolWidth: 0,
            symbolHeight: 0,
            symbolRadius: 0,
            labelFormatter: function () {
                return `
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                  <span style="
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: ${this.color};
                    margin-right: 8px;
                    margin-top: 8px;
                  "></span>
                  <span style="position: relative; top: 2px;">${this.name}</span>
                </div>
              `;
            }
        },
        xAxis: {
            categories: props?.categories,
            gridLineWidth: 1,
            gridLineColor: '#4C4B5850',
            lineWidth: 1,
            lineColor: '#4C4B58',
            tickLength: 0,
            labels: {
                style: {
                    color: '#fff'
                }
            },
            gridLineDashStyle: 'Dash',
            min: 0,
            max: props?.data[0].data.length - 1,
            startOnTick: false,
            endOnTick: false
        },

        yAxis: {
            title: {
                text: '',
            },
            gridLineWidth: 1,
            gridLineColor: '#4C4B5850',
            gridLineDashStyle: 'Dash',
            lineWidth: 1,
            lineColor: '#4C4B58',
            tickLength: 0,
            labels: {
                style: {
                    color: '#fff'
                }
            },
            endOnTick: false,
            startOnTick: false
        },
        plotOptions: {
            spline: {
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                marker: {
                    enabled: false
                }
            },
            series: {
                cursor: 'pointer',
                pointPlacement: 'on',
                pointStart: 0,
                pointPadding: 0,
                groupPadding: 0
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
        series: props?.data.map(series => ({
            type: 'spline',
            name: series.name,
            data: series.data,
            color: series.color,
        }))
    };

    return (<>
        <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
        />
    </>);
}

export const DonutChart = ({ className, ...props }) => {
    const chartOptions = {
        chart: {
            type: 'variablepie',
            backgroundColor: 'transparent',
            width: props?.width,
            height: props?.height,
            spacing: [0, 0, 0, 0],
            margin: [0, 0, 0, 0],
        },
        title: {
            text: ''
        },
        plotOptions: {
            variablepie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
                borderRadius: 1,
            },
            series: {
                cursor: 'pointer',
                pointPlacement: 'on',
                pointStart: 0,
                pointPadding: 0,
                groupPadding: 0,
                stickyTracking: false
            },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: true,
            followPointer: true,
            followTouchMove: true,
            outside: true,
            distance: 10,
            formatter: function() {
                return `<div class="bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg p-3" style="z-index: 9999;">
                    <strong class="text-sm font-medium">${this.point.name}</strong><br/>
                    <span class="text-xs text-gray-200/90">${(this.point.y * 100).toFixed(1)}%</span><br/>
                   
                </div>`;
            },
            useHTML: true,
            backgroundColor: 'transparent',
            borderWidth: 0,
            shadow: false,
            style: {
                color: 'white',
                zIndex: 9999
            }
        },
        series: [{
            minPointSize: 5,
            innerSize: '70%',
            zMin: 0,
            data: props?.data,
        }]
    };

    return (
        <div style={{ position: 'relative' }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
}
