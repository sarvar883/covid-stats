import React from 'react';

import Chart from "react-apexcharts";
import { fitData } from '../../utils/fitData';

const RenderChart = ({ name, title, data, newCases = false }) => {
  const { categoriesArray, seriesArray } = fitData({ data, newCases });

  const options = {
    chart: {
      id: "basic-bar"
    },
    grid: {
      padding: {
        right: 20,
        left: 20,
      }
    },
    xaxis: {
      categories: categoriesArray
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toLocaleString()
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: title,
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "25px"
      }
    }
  };

  const series = [
    {
      name: name,
      data: seriesArray
    }
  ];


  return (
    <div className="chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="400px"
      />
    </div>
  )
}

export default RenderChart;