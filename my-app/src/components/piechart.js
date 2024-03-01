import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import './piechart.css'; 

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    // Define hardcoded data for the pie chart
    const data = {
        labels: ['Fixed', 'Variable', 'Entertainment'],
        datasets: [
            {
                label: 'Expenses',
                data: [12, 19, 3], // Example data values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='pie-chart'>
            <h2>Expenses Overview</h2>
            <div className='pie-data'>
            <Doughnut data={data} />
            </div>
            </div>
    );
};

export default PieChart;
