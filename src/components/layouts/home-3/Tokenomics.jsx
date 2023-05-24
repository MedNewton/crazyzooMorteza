import React from 'react';
import tokenomicsChartAvif from '../../../assets/images/landing/chart.avif'

/* chart imports */

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from 'react';



const Tokenomics = () => {

    useEffect(()=>{
        // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();


    chart.data = [
        {
            country: "Liquid Market",
            amount: "40%",
            litres: 144,
            color: am4core.color("#e7b649")
        },
        {
            country: "Marketing",
            amount: "5%",
            litres: 18,
            color: am4core.color("#f9d98d")
        },
        {
            country: "Presale",
            amount: "20%",
            litres: 72,
            color: am4core.color("#13a455")
        },
        {
            country: "Advisor Team",
            amount: "5%",
            litres: 18,
            color: am4core.color("#f8ce78")
        },
        {
            country: "Burn",
            amount: "10%",
            litres: 36,
            color: am4core.color("#e9ae31")
        },
        {
            country: "Team",
            amount: "20%",
            litres: 72,
            color: am4core.color("#f5d07f")
        },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    series.labels.template.properties.fontFamily= "Circular"
    series.labels.template.properties.fontSize = "1.5em"
    series.labels.template.fill = "#fff"
    series.labels.template.text = '{category}\n[#86ffa1]{amount}'

    
    series.hiddenInLegend = true
    series.slices.template.propertyFields.fill = "color";

    series.ticks.template.strokeWidth = 2;
    series.ticks.template.stroke = "#fff"
    series.ticks.template.strokeOpacity = 0.7;
    series.ticks.template.margin = 10;

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0.9];
    fillModifier.offsets = [0.5, 0.8];
    //fillModifier.gradient.rotation = 90;
        
    series.slices.template.fillModifier = fillModifier
   

    })

    return (
        <div className='tokenomicsWrapper'>
            <h5 className='introductionTitle' style={{marginBottom: "5%"}}>Total Supply</h5>

            <h5 className="introSubtitle">100 Billion ZOO</h5>
            <div className='tokenomicsChartWrapper'>
            <div id="chartdiv" style={{ width: "100%", height: "500px", marginBottom: "10%"}}></div>
            </div>
        </div>
    );
}

export default Tokenomics;