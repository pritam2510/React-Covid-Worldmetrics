import React, { Component } from 'react';

import { 
    Card, 
    CardBody, 
    CardFooter 
} from 'reactstrap';

import WorldMap from '../../components/WorldMap/WorldMap';
import Spinner from '../../components/UI/Spinner/Spinner';
import CountriesTable from '../../components/WorldMap/CountriesTable/CountriesTable';
import Heading from '../../components/UI/Heading/Heading';

class WorldMapOverview extends Component {

    render() {
        let dashBoard = (
            <div className="container">
                <div className="row row-content align-items-center">
                    <Spinner />
                </div>
            </div>
        );

        if (this.props.globalData !== null && this.props.countriesData !== null) {
            dashBoard = (
                <div className="container">
                    <div className="row row-content align-items-center">
                        <Heading headingText="World Map" />
                        <WorldMap countriesData={this.props.countriesData} />
                    </div>
                    <Heading headingText="Covid-19 cases by country" />
                    <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                        <CardBody>
                            <div className="row row-content align-items-center">
                                <CountriesTable countriesData={this.props.countriesData} />
                            </div>
                        </CardBody>
                        <CardFooter>
                            <em>
                                Please Click on the Country Name to get additional COVID-19 case details.
                            </em>
                        </CardFooter>
                    </Card>
                </div>
            );
        }
        return dashBoard;
    }
}

export default WorldMapOverview;