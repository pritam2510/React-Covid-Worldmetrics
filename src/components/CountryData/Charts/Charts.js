import React from 'react';

import Chart from './Chart/Chart';
import Heading from '../../UI/Heading/Heading';

import { 
    Card, 
    CardBody 
} from 'reactstrap';

const Example = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const confirmed = props.countryHistoryData.reduce((acc, ele) => {
        acc[new Date(ele["date"]).getMonth()] = acc[new Date(ele["date"]).getMonth()] || 0;
        acc[new Date(ele["date"]).getMonth()] = ele["confirmed"]
        return acc
    }, []);

    const active = props.countryHistoryData.reduce((acc, ele) => {
        acc[new Date(ele["date"]).getMonth()] = acc[new Date(ele["date"]).getMonth()] || 0;
        acc[new Date(ele["date"]).getMonth()] = ele["confirmed"] - (ele["recovered"] +  ele["deaths"])
        return acc
    }, []);

    const recovered = props.countryHistoryData.reduce((acc, ele) => {
        acc[new Date(ele["date"]).getMonth()] = acc[new Date(ele["date"]).getMonth()] || 0;
        acc[new Date(ele["date"]).getMonth()] = ele["recovered"]
        return acc
    }, []);

    const deaths = props.countryHistoryData.reduce((acc, ele) => {
        acc[new Date(ele["date"]).getMonth()] = acc[new Date(ele["date"]).getMonth()] || 0;
        acc[new Date(ele["date"]).getMonth()] = ele["deaths"]
        return acc
    }, []);

    return (
        <React.Fragment>
            <Heading headingText="Cumulative Case Trend" />
            <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                <CardBody>
                    <div className="row row-content align-items-center m-0">                        
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={months.slice(0,confirmed.length)}
                                countriesData={confirmed}
                                label="Confirmed Cases"
                                lineColor="#CA0B00"
                                iconType="danger"
                            />
                        </div>    
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={months.slice(0,active.length)}
                                countriesData={active}
                                label="Active Cases"
                                lineColor="#ff980f"
                                iconType="warning"
                            />
                        </div>                    
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={months.slice(0,deaths.length)}
                                countriesData={deaths}
                                label="Death Cases"
                                lineColor="#DCDCDC"
                                iconType="secondary"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={months.slice(0,recovered.length)}
                                countriesData={recovered}
                                label="Recovered Cases"
                                lineColor="#00cc00"
                                iconType="success"
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Example;