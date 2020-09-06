import React, { useState } from 'react';

import ReactTooltip from "react-tooltip";

import { 
    Card, 
    CardBody, 
    CardFooter 
} from 'reactstrap';

import MapChart from "./MapChart/MapChart";

import "./WorldMap.css";

const WorldMap = (props) => {
    const [content, setContent] = useState("");

    return (
        <div className="WorldMap col-12">
            <Card outline color="secondary">
                <CardBody>
                    <MapChart
                        setTooltipContent={setContent}
                        countriesData={props.countriesData}
                    />
                    <ReactTooltip
                        multiline={true}
                        html={true}
                    >
                        {content}
                    </ReactTooltip>
                </CardBody>
                <CardFooter>
                    <em>
                        Please Click<span className="WorldMapDesktopOnly">/Hover</span> to get additional COVID-19 case details of various Countries.
                    </em>
                </CardFooter>
            </Card>
        </div>
    );
}

export default WorldMap;
