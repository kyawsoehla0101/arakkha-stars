import axios from "axios";
import {
  LESSON_LIST_REQUEST,
  LESSON_LIST_SUCCESS,
  LESSON_LIST_FAIL,
  LESSON_DETAILS_LIST_REQUEST,
  LESSON_DETAILS_LIST_SUCCESS,
  LESSON_DETAILS_LIST_FAIL,
} from "../constants/lessonContstants";

export const listLessons = (slug) => async (dispatch) => {
  try {
    dispatch({ type: LESSON_LIST_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/lessons/${slug}/`);
       dispatch({
            type: LESSON_LIST_SUCCESS,
            payload:data
    });
  } catch (error) {
       dispatch({
            type: LESSON_LIST_FAIL,
            payload: error.response && error.response.data.detail
                 ? error.response.data.detail
                 : error.message,
       })
  }
};
export const listLessonDetails = (slug,contentId) => async (dispatch) => {
  try {
    dispatch({ type: LESSON_DETAILS_LIST_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8000/api/lessons/${slug}/${contentId}/`);
       dispatch({
            type: LESSON_DETAILS_LIST_SUCCESS,
            payload:data
    });
  } catch (error) {
       dispatch({
            type: LESSON_DETAILS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                 ? error.response.data.detail
                 : error.message,
       })
  }
};