import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Container} from '@material-ui/core';
import Fade from 'react-reveal/Fade';


const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',

  },
  gridList: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    padding: 20,
  },
  gridListTile: {
    justifyContent: 'center',
  }
});


class Home extends Component {
  componentDidMount(){
    // Get movies from database
    this.props.dispatch({type: 'GET_MOVIES'})
  }

  handleClick = (movie) => {
    console.log(this.props.history)
    this.props.dispatch({type:'SET_DETAIL', payload: movie})
    // this.props.dispatch({type:'GET_GENRES', payload:this.props.movie.id})
    this.props.history.push('/details')
  }
  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Container>
          <Fade bottom>
            <GridList spacing={8} cellHeight={'auto'} className={classes.gridList} cols={'auto'}>
              {/* {JSON.stringify(this.props.reduxState.movies)} */}
              {this.props.reduxState.movies.map((movie, index) => (
                <GridListTile className={classes.gridListTile} key={index} cols={1}>
                  <img src={movie.poster} alt={movie.title} onClick={()=>this.handleClick(movie)} />
                </GridListTile>
              ))}
            </GridList>
          </Fade>
        </Container>
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

export default withStyles(styles,{withTheme: true})(connect(mapStateToProps)(Home));
