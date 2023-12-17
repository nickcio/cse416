import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = ({ ensembles }) => {
  const sortedEnsembles = ensembles.slice().sort((a, b) => 
          a.num_district_plans - b.num_district_plans
      );

  const data = {
    datasets: [
      {
        label: 'Number of Clusters',
        data: sortedEnsembles.map(e => ({
          x: e.num_district_plans, 
          y: e.num_clusters, 
        })),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false // There's only one dataset so we don't need a legend
      },
      title: {
        display: true,
        text: 'Number of Clusters vs. Number of District Plans',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Number of District Plans'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Clusters'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChartComponent;
