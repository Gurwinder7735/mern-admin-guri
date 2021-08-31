import * as actionType from "./actionTypes";
import axios from 'axios'
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

export const addUser = (data) => {
    console.log(data);
  return (dispatch) => {
    dispatch(addUserStart());

    axios
      .post("api/user", data)
      .then((res) => {
        dispatch(addUserSuccess(res.data.message));

        console.log("RES", res);
      })
      .catch((err) => {
        dispatch(addUserFailed(err.response.data.message));
        console.log(err);
      });
  };
};
