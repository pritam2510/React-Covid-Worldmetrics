import React from 'react';

import InfoCard from './InfoCard/InfoCard';

const InfoCards = (props) => {
    return (
        <React.Fragment>
            <InfoCard
                type={"TotalCases"}
                cardHeading="Total Cases"
                totalCases={(props.globalData["TotalConfirmed"])}
                newCases={(props.globalData["NewConfirmed"])}
            />
            <InfoCard
                type={"ActiveCases"}
                cardHeading="Active Cases"
                totalCases={(props.globalData["TotalConfirmed"] - (props.globalData["TotalRecovered"] + props.globalData["TotalDeaths"]))}
                newCases={(props.globalData["NewConfirmed"])}
            />
            <InfoCard
                type={"RecoveredCases"}
                cardHeading="Recovered Cases"
                totalCases={(props.globalData["TotalRecovered"])}
                newCases={(props.globalData["NewRecovered"])}
            />
            <InfoCard
                type={"DeceasedCases"}
                cardHeading="Deceased Cases"
                totalCases={(props.globalData["TotalDeaths"])}
                newCases={(props.globalData["NewDeaths"])}
            />
        </React.Fragment>
    );
}

export default InfoCards;