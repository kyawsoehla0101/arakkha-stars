import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ContentListReducer } from "./reducers/contentReducers";
import { SubjectListReducer } from "./reducers/subjectReducers";
import { LessonDetailsReducer, LessonListReducer } from "./reducers/lessonReducers";
const reducer = combineReducers({
  contentList: ContentListReducer,
  subjectList: SubjectListReducer,
  lessonList: LessonListReducer,
  lessonDetails: LessonDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
