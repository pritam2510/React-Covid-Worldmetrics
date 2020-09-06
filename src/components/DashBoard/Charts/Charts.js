import React from 'react';

import { 
    Card, 
    CardBody 
} from 'reactstrap';

import Chart from './Chart/Chart';
import Heading from '../../UI/Heading/Heading';


const Example = (props) => {
    const countries = props.top5Countries.map((country) => {
        return country["Slug"].toUpperCase();
    });

    const totalConfirmedCases = props.top5Countries.map((country) => {
        return country["TotalConfirmed"];
    });

    const totalActiveCases = props.top5Countries.map((country) => {
        return (country["TotalConfirmed"] - (country["TotalRecovered"] + country["TotalDeaths"]));
    });

    const totalDeathsCases = props.top5Countries.map((country) => {
        return country["TotalDeaths"];
    });

    const totalRecoveredCases = props.top5Countries.map((country) => {
        return country["TotalRecovered"];
    });

    const newConfirmedCases = props.top5Countries.map((country) => {
        return country["NewConfirmed"];
    });

    const newDeathsCases = props.top5Countries.map((country) => {
        return country["NewDeaths"];
    });

    const newRecoveredCases = props.top5Countries.map((country) => {
        return country["NewRecovered"];
    });

    const newActiveCases = props.top5Countries.map((country) => {
        return (country["NewConfirmed"] - (country["NewRecovered"] + country["NewDeaths"]));
    });

    return (
        <React.Fragment>
            <Heading headingText="Total Cases Comparison" />
            <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                <CardBody>
                    <div className="row row-content align-items-center m-0">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={countries}
                                countriesData={totalConfirmedCases}
                                label="Confirmed Cases"
                                lineColor="#CA0B00"
                                iconType="danger"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={countries}
                                countriesData={totalActiveCases}
                                label="Active Cases"
                                lineColor="#ff980f"
                                iconType="warning"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={countries}
                                countriesData={totalDeathsCases}
                                label="Death Cases"
                                lineColor="#DCDCDC"
                                iconType="secondary"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={countries}
                                countriesData={totalRecoveredCases}
                                label="Recovered Cases"
                                lineColor="#00cc00"
                                iconType="success"
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Heading headingText="New Cases Comparison" />
            <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                <CardBody>
                    <div className="row row-content align-items-center m-0">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <Chart
                                countriesLabel={countries}
                                countriesData={newConfirmedCases}
                                label="Confirmed Cases"
                                lineColor="#CA0B00"
                                iconType="danger"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 w-100">
                            <Chart
                                countriesLabel={countries}
                                countriesData={newActiveCases}
                                label="Active Cases"
                                lineColor="#ff980f"
                                iconType="warning"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <Chart
                                countriesLabel={countries}
                                countriesData={newDeathsCases}
                                label="Death Cases"
                                lineColor="#DCDCDC"
                                iconType="secondary"
                            />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <Chart
                                countriesLabel={countries}
                                countriesData={newRecoveredCases}
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