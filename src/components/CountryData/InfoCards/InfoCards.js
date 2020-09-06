import React from 'react';

import InfoCard from '../../DashBoard/InfoCards/InfoCard/InfoCard';

const InfoCards = (props) => {
    return (
        <React.Fragment>
            <InfoCard
                type={"TotalCases"}
                cardHeading="Total Cases"
                totalCases={(props.countryData["TotalConfirmed"])}
                newCases={(props.countryData["NewConfirmed"])}
            />
            <InfoCard
                type={"ActiveCases"}
                cardHeading="Active Cases"
                totalCases={(props.countryData["TotalConfirmed"] - (props.countryData["TotalRecovered"] + props.countryData["TotalDeaths"]))}
                newCases={(props.countryData["NewConfirmed"])}
            />
            <InfoCard
                type={"RecoveredCases"}
                cardHeading="Recovered Cases"
                totalCases={(props.countryData["TotalRecovered"])}
                newCases={(props.countryData["NewRecovered"])}
            />
            <InfoCard
                type={"DeceasedCases"}
                cardHeading="Deceased Cases"
                totalCases={(props.countryData["TotalDeaths"])}
                newCases={(props.countryData["NewDeaths"])}
            />
        </React.Fragment>
    );
}

export default InfoCards;