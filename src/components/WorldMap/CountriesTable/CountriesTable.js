import React from 'react';

import { 
    Link, 
    withRouter 
} from 'react-router-dom';

import { Table } from 'reactstrap';

import './CountriesTable.css';

import numberWithCommas from '../../../util/numberWithCommas';


const CountriesTable = (props) => {
    let countriesTableData = props.countriesData
        .map((country, index) => {
            const activeCases = (country["TotalConfirmed"] - (country["TotalRecovered"] + country["TotalDeaths"]))
            return (
                <tr key={country["CountryCode"]}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <Link to={`${props.match.url}/country/${country["CountryCode"]}`}>
                            <strong>
                                {numberWithCommas(country["Country"])}
                            </strong>
                        </Link>
                    </td>
                    <td>
                        {numberWithCommas(country["TotalConfirmed"])}
                    </td>
                    <td className="bg-warning">
                        <strong>
                            +{numberWithCommas(country["NewConfirmed"])}
                        </strong>
                    </td>
                    <td>
                        {numberWithCommas(country["TotalDeaths"])}
                    </td>
                    <td className="bg-danger">
                        <strong>
                            +{numberWithCommas(country["NewDeaths"])}
                        </strong>
                    </td>
                    <td>
                        {numberWithCommas(country["TotalRecovered"])}
                    </td>
                    <td className="bg-success">
                        <strong>
                            +{numberWithCommas(country["NewRecovered"])}
                        </strong>
                    </td>
                    <td>{numberWithCommas(activeCases)}</td>
                </tr>
            )
        });

    return (
        <div className="col-12 overflow-auto CountriesTable">
            <Table bordered hover responsive striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country Name</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Deceased Cases</th>
                        <th>New Deceased Cases</th>
                        <th>Recovered Cases</th>
                        <th>New Recovered Cases</th>
                        <th>Active Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {countriesTableData}
                </tbody>
            </Table>
        </div>
    );
}

export default withRouter(CountriesTable);