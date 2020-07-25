import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0) 100%',

  },
  gridList: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'space-around',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


class Home extends Component {
  componentDidMount(){
    // Get movies from database
    this.props.dispatch({type: 'GET_MOVIES'})
  }


  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={'auto'} className={classes.Home} cols={0}>
          {/* {JSON.stringify(this.props.reduxState.movies)} */}
          {this.props.reduxState.movies.map((movie, index) => (
            <GridListTile key={index} cols={1}>
              <Movie movie={movie}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxState => ({
  reduxState,
});

export default withStyles(styles)(connect(mapStateToProps)(Home));
