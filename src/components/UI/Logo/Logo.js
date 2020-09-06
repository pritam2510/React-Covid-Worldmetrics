import React from 'react';

import CovidLogo from '../../../assests/images/Covidlogo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <React.Fragment>
            <div className="Logo">
                <img src={CovidLogo} alt="My Burger" />
                <span className="LogoHeader">
                    Covid Worldmetrics
                </span>
            </div>

        </React.Fragment>
    );
}

export default Logo;