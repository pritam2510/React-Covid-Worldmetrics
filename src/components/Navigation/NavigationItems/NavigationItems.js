import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem clicked={props.clicked} exact={true} link='/'><i className="fa fa-home fa-lg"></i> Home</NavigationItem>
            <NavigationItem clicked={props.clicked} exact={false} link='/worldmap'><i className="fa fa-globe fa-lg"></i> World-Map</NavigationItem>
            <NavigationItem clicked={props.clicked} exact={true} link='/faq'><i className="fa fa-question fa-lg"></i> FAQ </NavigationItem>
        </ul>
    );
}

export default NavigationItems;