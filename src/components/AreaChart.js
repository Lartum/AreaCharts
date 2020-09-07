import React from 'react'
import Chart from "react-apexcharts";
import Months from '../data/Months'
import { IphoneSales } from '../data/Items'

const AreaChart = () =>{
    
    let chartOptions = {
        chart: {
            id: "basic-area",
            toolbar: {
                autoSelected: "pan",
                show: false
              } 
          },
          xaxis: {
            categories: Months
          },
          dataLabels:{
              enabled: false
          },
          grid: {
            borderColor: "#555",
            clipMarkers: false,
            yaxis: {
              lines: {
                show: false
              }
            }
        },
            
    }    
    let chartSeries = [
        {
          name: "Iphone Sales",
          data: IphoneSales
        }
    ]

    
    return(
        <div>
            <Chart
            options = {chartOptions}
            series = {chartSeries}
            type= 'area'
            width = "500"
            />
        </div>
    )
 }

 export default AreaChart