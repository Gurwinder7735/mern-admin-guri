import axios from "axios";
import * as actionType from "./actionTypes";

const setCMS = (data) => ({
  type: actionType.SET_CMS,
  payload: data,
});

export const getCMS = (type) => {

  return (dispatch) => {
    axios
      .get(`api/cms/${type}`)
      .then((res) => {
        dispatch(setCMS(res.data.body.content));
      })
      .catch((err) => {
        //   dispatch(addUserFailed(err.response.data.message));
        console.log(err);
      });
  };
  
};
