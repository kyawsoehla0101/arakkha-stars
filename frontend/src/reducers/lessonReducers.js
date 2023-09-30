import {
  LESSON_LIST_REQUEST,
  LESSON_LIST_SUCCESS,
  LESSON_LIST_FAIL,
  LESSON_DETAILS_LIST_REQUEST,
  LESSON_DETAILS_LIST_SUCCESS,
  LESSON_DETAILS_LIST_FAIL,
} from "../constants/lessonContstants";

export const LessonListReducer = (state = { lessons: [] }, action) => {
  switch (action.type) {
    case LESSON_LIST_REQUEST:
      return { loading: true, lessons: [] };

    case LESSON_LIST_SUCCESS:
      return { loading: false, lessons: action.payload };

    case LESSON_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const LessonDetailsReducer = (state = { lesson: [] }, action) => {
  switch (action.type) {
    case LESSON_DETAILS_LIST_REQUEST:
      return { loading: true, ...state };

    case LESSON_DETAILS_LIST_SUCCESS:
      return { loading: false, lesson: action.payload };

    case LESSON_DETAILS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
