import { auth } from '../firebase';
import axios from 'axios'
const initialState = {
    user: null,
    isAdmin: false,
    authToken: null,


}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHECK_USER':
            return {
                ...state,
                user: action.user
            };
        case 'CHECK_ADMIN':
            return {
                ...state,
                isAdmin: !state.isAdmin
            };
        default:
            return state
    }
}


export const checkUser = (user) => {
    return {
        type: 'CHECK_USER',
        user: user
    };
}



export const checkAdmin = () => {
    return {
        type: 'CHECK_ADMIN',
    };
}



export const logOut = () => {

    return function (dispatch) {

        /*
        Handles Firebase Log out
      auth
        .signOut()
        .then(result => {
          //console.log(result);
          dispatch();
  
  
        });
        */
    }

};


export const login = (login) => {

    return function (dispatch) {

        /*
    
        Handles Firebase Email Login...Check Firebase Documentation for more login Methods
    
        auth.signInWithEmailAndPassword(login.email, login.password).then(result => {
            
            console.log(result);
        }).catch(error => {
            if (error.code == 'auth/user-not-found') {
              console.log('Ooops!', 'User not found');
            } else if (error.code == 'auth/wrong-password') {
              console.log('Ooops!', 'Wrong password');
            } else if (error.code == "auth/invalid-email") {
              console.log('Ooops!', 'Invalid Email');
            }
      
        });
    
        You can use your own login implementation here
    
          axios({
                method: 'post',
                url: `Your AUTH URL HERE`,
                data: {
                    email: login.email,
                    password: login.password,
                }
        
            }).then(res => {
                console.log(res.data);
            }).catch((error) => {
                if (error.response) {
                    
                     The request was made and the server responded with a
                     status code that falls out of the range of 2xx
                     
                    console.log(error.response.data);
                    toastr.info(error.response.data.title, error.response.data.message);
                   
                        if (error.response.status == 401) {
                            
                        }
        
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     
        
                    console.log(error.request);
                } else {
                    Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error);
            });
        */
    }


}
