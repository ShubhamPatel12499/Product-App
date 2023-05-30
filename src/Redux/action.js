import  axios  from "axios";
import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  try {
    let res = await axios.get(
      "https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json"
    );
    // console.log(res.data.data);
    dispatch({ type: GET_DATA_SUCCESS, payload: res.data.d.results});
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_DATA_ERROR });
  }
};