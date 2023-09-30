import axios from "axios";
import {
  CONTENT_LIST_REQUEST,
  CONTENT_LIST_SUCCESS,
  CONTENT_LIST_FAIL,
} from "../constants/contentContstants";

export const listContents = (slug,contentId) => async (dispatch) => {
  try {
    dispatch({ type: CONTENT_LIST_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/subject-contents/${slug}/`);
       dispatch({
            type: CONTENT_LIST_SUCCESS,
            payload:data
    });
  } catch (error) {
       dispatch({
            type: CONTENT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                 ? error.response.data.detail
                 : error.message,
       })
  }
};