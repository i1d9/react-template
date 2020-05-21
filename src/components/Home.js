import React, { Component } from 'react';

/*Redux Components*/
import { connect } from 'react-redux';
import { addCounter, reduceCounter } from '../reducers/contentReducer';
/*Redux Components*/

/* Material UI components */
import Container from '@material-ui/core/Container';
import { Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
/*Material UI Components*/





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
        counter: state.contentReducer.counter,

    };
};



const mapDispatchToProps = dispatch => {
    return {

        /*
        Access functions from the reducers here


        */
        addCounter: () => {
            dispatch(addCounter());
        },

        reduceCounter: () => {

            dispatch(reduceCounter());
        }



    };
};
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        console.log(this.props);
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
                <Card>

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {this.props.counter}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => { this.props.addCounter() }}>
                            Add
                    </Button>

                        <Button onClick={() => { this.props.reduceCounter() }}>
                            Subtract
                    </Button>
                    </CardActions>

                </Card>
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