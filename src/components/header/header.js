import React, { Component } from 'react';
import injectSheet from 'react-jss';
import MainPopper from '../menus/main-menu';
import Dashboard from '@material-ui/icons/Dashboard';
import CalendarToday from '@material-ui/icons/CalendarToday';
import People from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Notifications from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Logo from '../img/nops-Logo.svg';
import User from '../img/user4.jpg';

const styles = {
    header: {
        boxShadow: '0px 1px 15px 1px rgba(69,65,78,0.08)',
        fontFamily: 'Poppins, sans-serif',
        color: '#676c7b',
        backfaceVisibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: 99,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '0 80px',
        '& ul' :{
            display: 'flex',
            padding: '12px 0',
            '& li': {
                fontSize: 14,
                fontWeight: 500,
                flexGrow: 1,
                listStyle: 'none',
                '& span': {
                    margin: '0 10px 0 0',
                    '& svg': {
                        verticalAlign: 'middle',
                        color: '#cecece',
                        width: 20,

                    },
                },
            },
        },
    },
    headerLeftLinks:{
        width: '33.3%',
        display: 'inline-block',
    },
    headerRightLinks:{
        width: '33.3%',
        display: 'inline-block',
        '& ul': {
            maxWidth: 222,
            width: '100%',
            float: 'right',
            margin: '0 0 -15px 0',
            padding: 0,
            '& svg': {
                color: '#0099cc',
                fontSize: 30,
                verticalAlign: 'middle',
            }, 
            '& img': {
                borderRadius: '100%',
                maxWidth: 39,
                width: '100%',
                verticalAlign: 'middle',
                margin: '-7px 0 0 10px',            
            },
        },
    },
    logo: {
        display: 'inline-block',
        width: '33.3%',
        textAlign: 'center',
        '& img': {
            width: 100,
            margin: '0 0 -15px 0',
        },
    },
}

class Header extends Component{
    constructor(props){
        super(props);

        this.state ={
            anchorEl: null,
            open: false,
        };
        
    }
    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    render(){
        const {classes} = this.props;
        const { anchorEl, open } = this.state;
        const id = open ? 'simple-popper' : null;

        return(

            <div className={classes.header}>
            <MainPopper id={id} open={open} anchorEl={anchorEl} transition/>
                <div className={classes.headerInner}>
                    <div className={classes.headerLeftLinks}>
                        <ul>
                            <li>
                            <Button variant="contained" className={classes.button} onClick={this.handleClick}>
                                <Dashboard className={classes.leftIcon} />
                                Dashboard
                            </Button>
                            {/* <a><span><Dashboard className={classes.icon} /></span>Dashboard<span><KeyboardArrowDown className={classes.icon} /></span></a> */}
                            </li>
                            <li onClick={this.handleClick}><a><span><CalendarToday className={classes.icon} /></span>My Calendar<span><KeyboardArrowDown className={classes.icon} /></span></a></li>
                            <li><a><span><People className={classes.icon} /></span>Users<span><KeyboardArrowDown className={classes.icon} /></span></a></li>
                            <li><a><span><Settings className={classes.icon} /></span>Settings<span><KeyboardArrowDown className={classes.icon} /></span></a></li>
                        </ul>
                    </div>
                    <div className={classes.logo}>
                        <a><img src={Logo}></img></a>
                    </div>
                    <div className={classes.headerRightLinks}>
                        <ul>
                            <li><a><Notifications className={classes.icon} /></a></li>
                            <li><a>John Wick</a><img src={User}></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default injectSheet(styles)(Header);