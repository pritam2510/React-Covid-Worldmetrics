import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardHeader
} from 'reactstrap';

import './InfoCard.css';

import numberWithCommas from '../../../../util/numberWithCommas';

const InfoCard = (props) => {
    let
        cardClassNames = ["InfoCard"],
        cardColor = "primary";

    switch (props.type) {
        case "TotalCases": {
            cardColor = "danger";
            break;
        }
        case "ActiveCases": {
            cardColor = "warning";
            break;
        }
        case "RecoveredCases": {
            cardColor = "success";
            break;
        }
        case "DeceasedCases": {
            cardColor = "secondary";
            break;
        }
        default: break;
    }

    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card color={cardColor} className={cardClassNames.join(' ')}>
                <CardHeader>{props.cardHeading} </CardHeader>
                <CardBody>
                    <CardTitle> {numberWithCommas(props.totalCases)} </CardTitle>
                    <CardSubtitle> +{numberWithCommas(props.newCases)} </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default InfoCard;