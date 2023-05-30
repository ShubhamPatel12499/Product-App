import  axios  from "axios";
import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const getData = (page) => async (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });
  try {
    let res = await axios.get(
      `https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json&$skiptoken=${page}`
    );
    console.log(res.data.d.results);
   let nproducts=[];
  let data=res.data.d.results;
  data.forEach((item,ind)=>{
    if(ind<10){
      nproducts.push(item)
    }
  })
  console.log(nproducts,'nproducts')
    dispatch({ type: GET_DATA_SUCCESS, payload:nproducts});
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_DATA_ERROR });
  }
};

