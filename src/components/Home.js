import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../reducers/contentReducer';
import {
    Link,
    Redirect
} from "react-router-dom";

const mapStateToProps = state => {
    return {
        /*
        Access States Here
        */
       loading: state.contentReducer.loading,
       user: state.authReducer.user,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
        /*
        Access functions from the reducers here

        loadFeed: () => {
            dispatch(loadFeed());
        }

        */
    };
};
class Home extends Component {

    componentWillMount(){
        /*
        Calling functions from the reducers
        this.props.loadFeed();
        console.log(this.props.loading);
        */
    }
  render() {
    return (
      <div>
          My Component
          {
              //  <Link to="/">Other Component</Link>
              //  <Redirect to='/' />
                      
          }
      </div>
    );
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
/*
Connects the component to the redux store
*/