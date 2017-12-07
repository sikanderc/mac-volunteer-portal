import {AuthAdapter} from '../Adapter'

export function getCurrentUser() {
  return dispatch => {
    dispatch(loadingUser());
    AuthAdapter.getUser()
    .then(userData => {
      dispatch(gettingCurrentUser(userData));
    })
  }
}

export function signInUser(userObj) {
  return dispatch => {
    dispatch(loadingUser())
    AuthAdapter.login(userObj)
    .then(userData => {
      dispatch(loginUser(userData));
    })
  }
}

export function signOutUser() {
  return dispatch => {
    AuthAdapter.logout()
    .then(userData => {
      dispatch(logOutUser());
    })
  }
  return
}

export function signUpUser(userObj) {
  return dispatch => {
    dispatch(signingUp())
    AuthAdapter.signUp(userObj)
    .then(userData => {
      dispatch(signedUpUser(userData));
    });
  };
}


export function loginError(json) {
}

export function signingUp() {
  return {
    type: "SIGNING_UP_USER"
  };
}

export function signedUpUser(userData) {
  return {
    type: "SIGNED_UP_USER",
    payload: userData
  };
}

export function loadingUser() {
  return {
    type: "LOADING_USER"
  };
}

export function loginUser(userData) {
  return {
    type: "LOGIN_USER",
    payload: userData
  };
}

export function gettingCurrentUser(userData) {
  return {
    type: "GET_USER",
    payload: userData
  };
}




export function logOutUser() {
  return {
    type: "LOG_OUT_USER"
    };
}

export function setUsers(usersData) {
  return {
    type: "SET_USER_DATA",
    payload: usersData
  }
}

export function emailChanged(email) {
  return {
    type: 'EMAIL_CHANGED',
    payload: email
  };
};

export function passwordChanged(password) {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export function getUsers() {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(response => response.json())
    .then(users => dispatch(setUsers(users)))
  }
}

// export function postComment(comment) {
//   return dispatch => {
//     fetch('http://localhost:3000/api/v1/comments', {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         body: JSON.stringify(comment),
//         Authorization: `Bearer ${localStorage.getItem("jwt")}`
//       }
//     })
//     .then(response => response.json())
//     .then(users => dispatch(addComment(comment)))
//   }
// }

export function updateUser(userObj) {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users/' + userObj.id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(userObj),
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    // .then(response => response.json())
    .then(users => dispatch(updateUserfunc(userObj)))
  }
}

export function updateUserfunc(userObj) {
  return {
    type: "UPDATE_USER",
    payload: userObj
  }
}