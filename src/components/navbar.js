import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Divider from 'material-ui/Divider';



export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>

                <AppBar
                    title="IRC"
                    onLeftIconButtonTouchTap={this.handleToggle}/>

                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <div className="listItems">
                        <div className="logo">
                            <img src="#" alt="logo"/>
                        </div>


                        <Link to="/">
                            <MenuItem onTouchTap={this.handleClose}>
                                <i className="fa fa-home fa-lg iconColor"/> Home</MenuItem>
                        </Link>
                        <Divider/>
                        <Link to="/irc/create">
                            <MenuItem onTouchTap={this.handleClose}><i className="fa fa-user-circle-o fa-lg iconColor"/> Profile</MenuItem>
                        </Link>
                    </div>
                </Drawer>
            </div>
        );
    }
}