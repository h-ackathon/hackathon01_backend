import {
  GET_ALL_LEAGUES,
} from "./types";
import axios from "axios";
import { API_URL } from '../constants';

export const getAllLeagues = () => {
  return dispatch => {
    axios.get(`${API_URL}allLeagues`)
      .then(function (resp) {
        if (resp.data.status === 200) {
          dispatch({
            type: GET_ALL_LEAGUES,
            payload: resp.data.response
          });
        }
        else throw `ERROR CODE -->> ${resp.data.status}`;
      })
      .catch(function (err) {
        // dispatch({
        //   type: LOADING_END,
        //   payload: {
        //     error: true,
        //     error_message: err
        //   }
        // });
        console.log(err);
      });
  }
}