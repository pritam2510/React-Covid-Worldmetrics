import React, { Component } from 'react';

import './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer,
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerOpenHandler} />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    show={this.state.showSideDrawer}
                />
                <main className="Content" >
                    {this.props.children}
                </main>
                <Footer updateDate={this.props.updateDate} />
            </React.Fragment>
        );
    }
}

export default Layout;