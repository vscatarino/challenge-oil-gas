import Chart from 'react-apexcharts';
import { Card, CardContent, Box, Typography, FormControlLabel, Radio } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from 'react';


const EquipmentChart = () => {

    const data: any = useLoaderData()
    const equipments: string[] = data.equipments
    const equipmentsMedia: number[] = data.avgList
    const navigate: any = useNavigate()
    const [period, setPeriod] = useState("one_day")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const period = event.target.value
        setPeriod(period);
        navigate(`/chart/${period}`)
    };
    const optionscolumnchart: ApexOptions = {
        chart: {
            id: 'column-chart',
            fontFamily: "'DM Sans', sans-serif",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
        },
        colors: ['#6ac3fd'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: equipments,
        },
        yaxis: {
            title: {
                text: 'AVG (value)',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter(val: any) {
                    return `${val}`;
                },
            },
            theme: 'dark',
        },
        grid: {
            show: false,
        },
        legend: {
            show: true,
            position: 'bottom',
            width: 50,
        },
    };
    const seriescolumnchart = [
        {
            name: 'AVG',
            data: equipmentsMedia,
        }
    ];

    return (
        <Box>
            <Box p={2} display="flex" alignItems="center">
                <Box flexGrow={1}>
                    <Typography variant="h4">Equipments AVG</Typography>
                </Box>
            </Box>
            <CardContent>
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar"
                    height="300px"
                />
            </CardContent>
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >
                <FormControlLabel
                    value="one_day"
                    control={
                        <Radio
                            color="primary"
                            checked={period === "one_day"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                    }
                    label="24 hours"
                    labelPlacement="end"

                />
                <FormControlLabel
                    value="two_day"
                    control={
                        <Radio
                            color="primary"
                            checked={period === "two_day"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                    }
                    label="48 hours"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="one_week"
                    control={
                        <Radio
                            color="primary"
                            checked={period === "one_week"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                    }
                    label="last week"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="one_month"
                    control={
                        <Radio
                            color="primary"
                            checked={period === "one_month"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                    }
                    label="last month"
                    labelPlacement="end"
                />

            </Box>
        </Box>
    );
};

export default EquipmentChart;
