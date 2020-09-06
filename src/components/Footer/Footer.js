import React from "react";

import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-4">
                        <em>
                            Last updated on: {new Date(props.updateDate).toLocaleString()}
                        </em>
                    </div>
                    <div className="col-4 HideCopyRight">
                        <p>© Copyright COVID-WORLDMETRICS</p>
                    </div>
                    <div style={{ float: "right" }} className="col-4 HideCopyRight">
                        <a style={{ float: "right" }} className="btn btn-social-icon btn-google m-1" href="mailto:pritam.d95@gmail.com">
                            <i className="fa fa-google-plus"></i>
                        </a>
                        <a style={{ float: "right" }} className="btn btn-social-icon btn-github m-1" href="https://github.com/pritam2510/reactworldmaptest">
                            <i className="fa fa-github-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;