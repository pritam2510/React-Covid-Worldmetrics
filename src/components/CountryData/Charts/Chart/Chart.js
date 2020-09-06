import React from 'react';

import { Line } from 'react-chartjs-2';

import { 
    Toast,
    ToastBody, 
    ToastHeader 
} from 'reactstrap';

import './Chart.css';

const options = {
    animation: {
        duration: 1500,
        easing: 'easeInCubic'
    },
    maintainAspectRatio: false,
    legend: {
        labels: {
            fontColor: "rgb(255, 238, 170)"
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                color: "rgba(255, 238, 170,0.2)"
            },
            ticks: {
                fontColor: "rgb(255, 238, 170)"
            }
        }],
        xAxes: [{
            gridLines: {
                display: true,
                color: "rgba(255, 238, 170,0.2)"
            },
            ticks: {
                fontColor: "rgb(255, 238, 170)"
            }
        }]
    }
};

const Chart = (props) => {
    return (
        <Toast className="ChartToast">
            <ToastHeader style={{color: "black"}} icon={props.iconType}>
                {props.label}
            </ToastHeader>
            <ToastBody style={{width: "100%"}}>
                <div className="Chart">
                    <Line
                        data={{
                            labels: props.countriesLabel,
                            datasets: [
                                {
                                    label: props.label,
                                    data: props.countriesData,
                                    backgroundColor: props.lineColor,
                                    borderColor: props.lineColor,
                                    borderWidth: 5,
                                    fill: true,
                                
                                }
                            ]
                        }}
                        options={options}
                    />
                </div>
            </ToastBody>
        </Toast>
    );
};

export default Chart;