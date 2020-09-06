import React, { memo } from 'react';

import {
    ComposableMap,
    Graticule,
    Sphere,
    Geographies,
    Geography
} from "react-simple-maps";

import { scaleLinear } from "d3-scale";

import { 
    Link, 
    withRouter 
} from 'react-router-dom';

import numberWithCommas from "../../../util/numberWithCommas";


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
    .domain([0, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000])
    .range(["#FFFDD0", "#7FFF00", "#FFFF00", "#F4C430", "#FFBF00", "#FF7F00", "#FF7F00", "#FF0000", "#FF2400", "#800000", "#65000B", "#660000", "#000000"]);

const MapChart = (props) => {
    return (
        <ComposableMap
            data-tip=""
            width={800}
            height={400}
            projectionConfig={{
                scale: 140,
            }}
        >
            <Sphere
                stroke="#1A5276"
                fill="#AED6F1"
                strokeWidth={1}
            />
            <Graticule
                stroke="#1A5276"
                strokeWidth={1}
            />
            {
                props.countriesData.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => {
                            return geographies.map(geo => {
                                const countryData = props.countriesData.find((ele) => ele.CountryCode === geo.properties.ISO_A2);
                                return (
                                    <Link key={geo.rsmKey} to={countryData ? `${props.match.url}/country/${geo.properties.ISO_A2}` : props.match.url} >
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => {
                                                const { NAME } = geo.properties;
                                                props.setTooltipContent(`<span style="text-transform: uppercase">${countryData ? countryData["Slug"] : NAME}</span> <br/>
                                                    ${countryData ? `Total Cases: ${numberWithCommas(countryData["TotalConfirmed"])} 
                                                    <br /> Recovered Cases: ${numberWithCommas(countryData["TotalRecovered"])}
                                                    <br /> Deceased Cases: ${numberWithCommas(countryData["TotalDeaths"])}` : 'No Case Recorded'}`);
                                            }}
                                            onMouseLeave={() => {
                                                props.setTooltipContent("");
                                            }}
                                            style={{
                                                default: {
                                                    fill: countryData ? colorScale(countryData["TotalConfirmed"]) : "#626567",
                                                    outline: "none"
                                                },
                                                hover: {
                                                    fill: countryData ? colorScale(countryData["TotalConfirmed"]) : "#626567",
                                                    outline: "none"
                                                },
                                                pressed: {
                                                    fill: countryData ? colorScale(countryData["TotalConfirmed"]) : "#626567",
                                                    outline: "none"
                                                }
                                            }}
                                        />
                                    </Link>
                                )
                            })
                        }}
                    </Geographies>
                )
            }
        </ComposableMap>
    );
}

export default memo(withRouter(MapChart));


