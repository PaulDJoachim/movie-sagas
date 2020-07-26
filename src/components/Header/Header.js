import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import {Typography, Button} from '@material-ui/core';
import './Header.css'
import 'fontsource-roboto';


class Header extends Component {
  

  // go to edit page when edit button is clicked
  handleClick = () =>{
    this.props.history.push('/edit');
  }


  render() {
    return (
      <div className="Header">
        <Link className='homeLink' to='/'><Button variant="contained" color="primary">Home</Button></Link>
        <Typography variant="h4" component="h6" >
          PMDB - The Prime Movie Database
        </Typography>

      </div>
    );
  }
}


export default withRouter(Header);