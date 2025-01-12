import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

import ReactApexChart from 'react-apexcharts';
import {Box, List, ListItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead,
        TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'clusterSize', headerName: 'Cluster Size', type: 'number', width: 130 },
    { field: 'demDistricts', headerName: 'Democratic Districts', type: 'number', width: 140 },
    { field: 'repDistricts', headerName: 'Republican Districts', type: 'number', width: 140 },
    {
      field: 'ratio',
      headerName: 'R:D Ratio',
      type: 'number',
      width: 90,
    },
    {
      field: 'aaod',
      headerName: 'AAOD',
      description: 'African-American Opportunity Districts',
      type: 'number',
      width: 90,
    },
    {
      field: 'hod',
      headerName: 'HOD',
      description: 'Hispanic Opportunity Districts',
      type: 'number',
      width: 90,
    },
  ];
  
  const rows = [];

export default function Clusters() {


    /*
       Here we make the table for the cluster data with the scatter plot above where when we open it opns the individualized district
       plans within the cluster

       Makes different clusters based off the ensemble that it is in

       Make a bubble graph first of the different plans, Make the table for different values we need

       Table includes:
		Republicans'/Democratic splits
		Percentage of Republican Voters
		Percentage of Democratic Voters,
		Percentage of Demographic groups,
		Etc
    */

    const bubbleChartOptions = {
        chart: {
            type: 'bubble',
            zoom: {
                enabled: false,
                type: 'x',
                autoScaleYaxis: true,  
                zoomedArea: {
                fill: {
                        color: '#90CAF9',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                },
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['white', '#008FFB', '#00E396', '#FEB019', '#A65FEC', 'white'],
        xaxis: {
            type: 'numeric',
            title: {
            forceNiceScale: false,
            min: 0,            
            max: 15,
            },
        },
        yaxis: {
        },
        };
    
        const bubbleChartData = [
        {
            name: "",
            data: [
            { x: 0, y: 0, z: 0 },
            ],
        },
        {
            name: 'Cluster #1',
            label: 'Arizona Cluster #123132', 
            data: [
            { x: 4, y: 12, z: 500 },
            ],
        },
        {
            name: 'Cluster #2',
            data: [
            { x: 7, y: 5, z: 300 },
            ],
        },
        {
            name: 'Cluster #3',
            data: [
            { x: 12, y: 10, z: 250},
            ],
        },
        {
            name: 'Cluster #4',
            data: [
            { x: 8, y: 6, z: 200 },
            ],
        },
        {
            name: "",
            data: [
            { x: 15, y: 15, z: 0 },
            ],
        },
        // Add more series if needed
        ];


    return (
        <Box style={{width: "50vw", height: "85vh", }} sx={{bgcolor: "white"}}>
            <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={"45%"} width={"99%"}/>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10},
                },
                }}
                sx ={{height:"55%"}}
                getRowHeight={() => 'auto'}
                

            />
        </Box>      
    )
}   

/*

*/

// /* <TableContainer component={Paper}>
//                 <Table sx={{ width: "100%" }} aria-label="simple table">
//                     <TableHead>
//                     <TableRow>
//                         <TableCell>Dessert (100g serving)</TableCell>
//                         <TableCell align="right">Calories</TableCell>
//                         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                         <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                         key={row.name}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                         <TableCell component="th" scope="row">
//                             {row.name}
//                         </TableCell>
//                         <TableCell align="right">{row.calories}</TableCell>
//                         <TableCell align="right">{row.fat}</TableCell>
//                         <TableCell align="right">{row.carbs}</TableCell>
//                         <TableCell align="right">{row.protein}</TableCell>
//                         </TableRow>
//                     ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>   <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={300} />*/