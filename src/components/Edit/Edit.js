import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Edit extends Component {
  state = {
    title: '',
    description: '',
    poster: ''
  }


  componentDidMount(){
    // checks if there is anything in the 'details' redux state
    // and goes to homepage if nothing found
    if (this.props.reduxState.details.length === 0){
      this.props.history.push('/')
    } else {
      // set the state to match the details from redux
      this.setState({
        title: this.props.reduxState.details.title,
        description: this.props.reduxState.details.description,
        poster: this.props.reduxState.details.poster,
        id: this.props.reduxState.details.id
      })
    }
  }

  editTitle = (event) => {
    this.setState({
      title: event.target.value
    })
    console.log(this.state.title)
  }
  
  editDesc = (event) => {
    this.setState({
      description: event.target.value
    })
    console.log(this.state.description)
  }

  submitEdit = () =>{
    // send edit to server
    this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state})
    // update 'details' redux store 
    this.props.dispatch({type:'SET_DETAIL', payload:this.state})
    // go back to details page to view changes
    this.props.history.push('/details')
  }

  cancel = () =>{
    this.props.history.push('/details')
  }

  render() {
    return (
      <div className="Edit">
        <img src={this.state.poster} alt={this.state.title}/>
        <h1>
        <input value={this.state.title} onChange={this.editTitle}></input>
        </h1>
        <textarea value={this.state.description} onChange={this.editDesc}></textarea>
        <button onClick={this.cancel}>Cancel</button>
        <button onClick={this.submitEdit}>Submit</button>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(Edit));