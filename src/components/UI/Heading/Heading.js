import React from 'react';

import './Heading.css'

const Heading = (props) => {
    return (
        <div className="col-12 Heading">
            <span>
                {props.headingText}
            </span>
            <hr />
        </div>
    );
}

export default Heading;