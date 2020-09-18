import { LOAD_DATA } from "./types";
import axios from "axios";

export const loadData = () => async (dispatch) => {
  const data = await axios.get(
    "https://api.spacexdata.com/v3/history"
  );
  dispatch({
    type: LOAD_DATA,
    payload: data.data,
  });
};


