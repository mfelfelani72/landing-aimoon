import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Functions

import { cn } from "../../../../utils/lib/cn"

const PieChart = ({ className, ...props }) => {


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
            innerSize: '88%',
            borderWidth: 0,
            data: props?.data
        }]
    };

    return (
        <>
            <div style={{ height: props?.height / 2 + 30, width: props?.width }} className='relative inline-block'>
                <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                </div>
                <div className='absolute bottom-0 inset-x-0 w-full grid grid-cols-3 px-2'>
                    {props?.data?.map((item, index) => (

                        <div className="inline-flex justify-center items-center gap-1">
                            <div style={{ backgroundColor: item?.color?.stops[0][1] }} className={`w-2 h-2 rounded-full`}></div>
                            <div className='text-Neutral-200 text-sm font-normal leading-tight'>{item?.name}</div>
                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}

export default PieChart;