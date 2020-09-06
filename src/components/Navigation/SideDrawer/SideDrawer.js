import React from 'react';

import './SideDrawer.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    const attachedClasses = ["SideDrawer", "Close"];

    if (props.show) {
        attachedClasses.pop();
        attachedClasses.push("Open");
    }

    return (
        <React.Fragment>
            <Backdrop
                show={props.show}
                clicked={props.closed}
            />
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSideDrawer" >
                    <span className="LogoHeaderSideDrawer">
                        Covid <br /> Worldmetrics
                    </span>
                    <hr style={{}}></hr>
                </div>
                <nav style={{ textAlign: "center" }}>
                    <NavigationItems clicked={props.closed} />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;