import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
//import {ReducerFunctionHere} from '../reducers/contentReducer';
import {
    Link,
    Redirect
} from "react-router-dom";
import { Typography } from '@material-ui/core';

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

    constructor(props){
        super(props);
        this.state={

        };
    }

    componentWillMount(){
        console.log(this.props);
        console.log('bbhjbh')
        /*
        Calling functions from the reducers
        this.props.loadFeed();
        console.log(this.props.loading);
        */
    }
  render() {
         //  <Link to="/">Other Component</Link>
        //  <Redirect to='/' />
           
    return (

        <Container maxWidth="sm">
          <h1>My Component</h1>   
          <Typography>
            My component
        </Typography>       
      </Container>
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