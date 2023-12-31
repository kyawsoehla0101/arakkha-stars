import {
    SUBJECT_LIST_REQUEST,
    SUBJECT_LIST_SUCCESS,
    SUBJECT_LIST_FAIL,
  } from "../constants/subjectConstants";
  
  export const SubjectListReducer = (state = { subjects: [] }, action) => {
    switch (action.type) {
      case SUBJECT_LIST_REQUEST:
        return { loading: true, subjects: [] };
  
      case SUBJECT_LIST_SUCCESS:
        return { loading: false, subjects: action.payload };
  
      case SUBJECT_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  