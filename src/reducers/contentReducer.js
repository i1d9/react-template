import axios from 'axios';
import { storage } from '../firebase';
const initialState = {
    /**
     * Initiate Your States here
     */
    isLoading: false,
   

}


export const contentReducer = (state= initialState,action)=>{

    switch(action.type){
        case 'LOADING_CONTENT':
            return {
                ...state,
                isLoading: !state.isLoading
            };
        default:
            return state;
    }
}


const loadingContent = () => {
    return {
        type: 'LOADING_CONTENT',
    };
}

/*
export const functionName = () => {
    return function (dispatch,getState) {

        //getState() Contains the current state in all reducers
        

    }
}
*/

/*
AXIOS POST
 
 var token = 'AUTHORIZATION TOKEN';
 axios({
            method: 'post',
            //mpesa
            url: `YOUR URL HERE`,
            headers: { authorization: `Bearer ${token}` },
            data: {
                data: 'VALUE'
            }
    
        }).then(res => {

            //console.log(res.data);
        }).catch((error) => {
            if (error.response) {
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 
                //console.log(error.response.data);
                
                    if (error.response.status == 401) {

                    }
    
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                
                 The request was made but no response was received, `error.request`
                  is an instance of XMLHttpRequest in the browser and an instance
                 of http.ClientRequest in Node.js
                 
    
                console.log(error.request);
            } else {
                //Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            //console.log(error.config);
            console.log(error);
        });
 */


 /*
 
 AXIOS GET
 var token = 'AUTHORIZATION TOKEN';
 
         axios({
            method: 'get',
            url: `YOUR URL`,
            headers: { authorization: `Bearer ${token}` },

        }).then(function (response) {
            // handle success
            //console.log(response.data);


        }).catch((error) => {
                if (error.response) {
                    
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     
                     //console.log(error.response.data);
                    
                    if (error.response.status == 401) {
                        if(error.response.data.type == "Session"){
                            dispatch(UserInValid());
                            dispatch(logOut());
                           
                        }
                    }

                    //console.log(error.response.status);
                    //console.log(error.response.headers);
                } else if (error.request) {
                    
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     
                  
                    //console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    ////console.log('Error', error.message);
                }
                dispatch(loadAllOrders([]));
                //console.log(error.config);
                // handle error
                //console.log(error);
        });
 
 
 
 */