import React, { Component } from 'react';

import { 
    Card, 
    CardBody, 
    Alert, 
    CardFooter 
} from 'reactstrap';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import InfoCards from '../../components/CountryData/InfoCards/InfoCards';
import Spinner from '../../components/UI/Spinner/Spinner';
import Charts from '../../components/CountryData/Charts/Charts';
import Heading from '../../components/UI/Heading/Heading';
import CountryNews from '../../components/CountryData/CountryNews/CountryNews';


class CountryOverview extends Component {
    state = {
        countryHistoryData: null,
        countryNewsData: null,
    }
    render() {
        let countryDispaly = (
            <div className="container">
                <div className="row row-content align-items-center">
                    <Spinner />
                </div>
            </div>
        );

        let newsData = (
            <div className="col-12">
                <Alert style={{ width: "100%" }} color="warning">
                    There is no Latest News regarding COVID-19!
                </Alert>
            </div>
        );

        if (this.state.countryNewsData !== null && this.state.countryNewsData.length > 0) {
            let latestNews = this.state.countryNewsData.length < 15 ?
                this.state.countryNewsData
                :
                this.state.countryNewsData.slice(0, 15);
            newsData = (
                <CountryNews countryNewsData={latestNews} />
            );
        }

        if (this.state.countryHistoryData !== null && this.props.countriesData !== null) {
            const country = (this.props.countriesData.filter((country) => (country["CountryCode"] === this.props.match.params.countryId))[0]);
            countryDispaly = (
                <div className="container">
                    <h1><strong>{country["Slug"].toUpperCase()}</strong></h1>
                    <Heading headingText="Overview" />
                    <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                        <CardBody>
                            <div className="row row-content align-items-center">
                                <InfoCards countryData={country} />
                            </div>
                        </CardBody>
                    </Card>
                    <div className="row row-content align-items-center">
                        <Charts countryHistoryData={this.state.countryHistoryData} />
                    </div>
                    <Heading headingText="Latest News" />
                    <div className="row row-content align-items-center">
                        <Card style={{ margin: "15px 5px 25px 5px" }} outline color="secondary">
                            <CardBody>
                                {newsData}
                            </CardBody>
                            <CardFooter>
                                <em>
                                    Please Click on the "News-Title" to read the full News Article.
                                </em>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            );
        }
        return countryDispaly;
    }
    componentDidMount() {
        axios.get(`https://api.smartable.ai/coronavirus/stats/${this.props.match.params.countryId}`, {
            headers: {
                "Subscription-Key": "0da90b10bf8c4bd39f54a8453865c4f8",
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    countryHistoryData: response.data.stats.history,
                });

                return axios.get(`https://api.smartable.ai/coronavirus/news/${this.props.match.params.countryId}`, {
                    headers: {
                        "Subscription-Key": "0da90b10bf8c4bd39f54a8453865c4f8",
                    }
                });
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    countryNewsData: response.data.news,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default withRouter(CountryOverview);