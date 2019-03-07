import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, RECEIVE_CURRENT_USER } from "../actionType";


export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: decoded
  };
};

export const registerUser = (userData, history) => dispatch => {
    return axios
      .post('/api/user_auth/register', userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));

        return Promise.resolve();
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        throw new Error();
      });
  };

  export const loginUser = userData => dispatch => {
    return axios
      .post('/api/user_auth/login', userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        return Promise.resolve();
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        throw new Error();
      });
  };


  export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    // console.log("logout")
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));

    return Promise.resolve();
  };