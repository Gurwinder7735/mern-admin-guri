import * as actionType from "./actionTypes";
import axios from 'axios'
import { setError, setLoading, setSuccess } from "../alerts/actions";

const addUserStart = () => ({
  type: actionType.ADD_USER_START,
});

const addUserSuccess = (data) => ({
  type: actionType.ADD_USER_SUCCESS,
  payload: data,
});

const addUserFailed = (data) => ({
  type: actionType.ADD_USER_FAILED,
  payload: data,
});

export const clearUser = ()=> ({
   type: actionType.CLEAR_USER,
})

const setUsers = (data) => ({
  type: actionType.SET_USERS,
  payload: data,
});

export const addUser = (data,history) => {
    console.log(data);
  return (dispatch) => {
    dispatch(addUserStart());

    axios
      .post("api/user", data)
      .then((res) => {
        dispatch(addUserSuccess(res.data.message));
        
        console.log("RES", res);
        dispatch(getUsers())
        history.push('users')
      })
      .catch((err) => {
        dispatch(addUserFailed(err.response.data.message));
        console.log(err);
      });
  };
};


export const getUsers = () => {

return (dispatch) => {
  
  dispatch(setLoading(true));

  axios
    .get("api/users")
    .then((res) => {
      dispatch(setUsers(res.data.body.users));
      dispatch(setLoading(false));

      console.log("RES", res);
    })
    .catch((err) => {
      setLoading(false);
      
      dispatch(setError(err.response.data.message));
      console.log(err);
    });
};
};

export const changeUserStatus = (id,status) => {
  console.log(status);
  const fd = new FormData();
  fd.append('status',status)
return (dispatch) => {

  axios
    .patch(`api/user/${id}`, fd)
    .then((res) => {
      dispatch(setSuccess(res.data.message));
      
      console.log("RES", res);
      dispatch(getUsers())
    })
    .catch((err) => {
      dispatch(setError(err.response.data.message));
      console.log(err);
    });
};
};

export const deleteUser = (id) => {

return (dispatch) => {

  axios
    .delete(`api/user/${id}`)
    .then((res) => {
      dispatch(setSuccess(res.data.message));
      
      console.log("RES", res);
      dispatch(getUsers())
    })
    .catch((err) => {
      dispatch(setError(err.response.data.message));
      console.log(err);
    });
};
};

