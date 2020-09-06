import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios';

import Layout from './containers/Layout/Layout';
import DashBoardOverview from './containers/DashBoardOverview/DashBoardOverview';
import WorldMapOverview from './containers/WorldMapOverview/WorldMapOverview';
import CountryOverview from './containers/CountryOverview/CountryOverview';
import FAQOverview from './containers/FAQOverview/FAQOverview';

class App extends Component {
  state = {
    globalData: null,
    countriesData: null,
    updateDate: null,
  }

  render() {
    return (
      <div >
        <BrowserRouter>
          <Layout updateDate={this.state.updateDate}>
            <Switch>
              <Route path="/worldmap/country/:countryId" exact render={() => <CountryOverview countriesData={this.state.countriesData} />} />
              <Route path="/worldmap" exact render={() => <WorldMapOverview globalData={this.state.globalData} countriesData={this.state.countriesData} />} />
              <Route path="/faq" exact component={FAQOverview} />
              <Route path="/" exact render={() => <DashBoardOverview globalData={this.state.globalData} countriesData={this.state.countriesData} />} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }


  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
      .then((response) => {
        console.log(response);

        const increasinTotalCasesCountriesData = response.data.Countries.sort((countryA, countryB) => {
          return countryB["TotalConfirmed"] - countryA["TotalConfirmed"]
        });

        this.setState({
          globalData: response.data.Global,
          countriesData: increasinTotalCasesCountriesData,
          updateDate: response.data.Date,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default App;