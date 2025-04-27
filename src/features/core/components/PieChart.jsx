import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Functions

import { cn } from "../../../../utils/lib/cn"

const PieChart = ({ className, ...props }) => {

    const findMaxData = () => {
        if (!props?.data?.length) return null;

        let maxItem = props.data[0];

        props.data.forEach(item => {
            if (item.y > maxItem.y) {
                maxItem = item;
            }
        });
        return {
            max: maxItem.y,        // مقدار بیشترین y
            color: maxItem.color   // رنگ مربوطه
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
            innerSize: '90%',
            borderWidth: 0,
            data: props?.data
        }]
    };

    return (
        <>
            <div style={{ height: props?.height / 2 + 30, width: props?.width }} className='relative inline-block'>
                <div className="absolute z-20">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                </div>
                <div className='absolute bottom-0 inset-x-0 w-full grid grid-cols-3 px-2'>
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
                            {findMaxData().max}%
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

export default PieChart;