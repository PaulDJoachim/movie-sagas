import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {
  

  // go to edit page when edit button is clicked
  handleClick = () =>{
    this.props.history.push('/edit');
  }


  render() {
    return (
      <div className="Header">
        <Link className='homeLink' to='/'><button>Home</button></Link>
        <h2>PMDB: The Prime Movie Database</h2>

      </div>
    );
  }
}


export default withRouter(Header);