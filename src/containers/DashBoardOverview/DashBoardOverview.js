import React, { Component } from 'react';

import {
    Card,
    CardBody
} from 'reactstrap';

import InfoCards from '../../components/DashBoard/InfoCards/InfoCards';
import Spinner from '../../components/UI/Spinner/Spinner';
import Charts from '../../components/DashBoard/Charts/Charts';
import Heading from '../../components/UI/Heading/Heading';

class DashBoardOverview extends Component {

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
                    <Heading headingText="Overview" />
                    <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                        <CardBody>
                            <div className="row row-content align-items-center">
                                <InfoCards globalData={this.props.globalData} />
                            </div>
                        </CardBody>
                    </Card>
                    <div className="row row-content align-items-center">
                        <Charts top5Countries={this.props.countriesData.slice(0, 5)} />
                    </div>
                </div>
            );
        }
        return dashBoard;
    }
}

export default DashBoardOverview;