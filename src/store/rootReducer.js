import { combineReducers } from 'redux';

import { answersReducer } from '@reducers/answer.reducer';
import { questionSelectReducer } from '@reducers/questionSelect.reducer';
import { questionsReducer } from '@reducers/questions.reducer';
import { scoreReducer } from '@reducers/score.reducer';
import { userReducer } from '@reducers/user.reducer';

const reducers = {
  answersReducer,
  questionSelectReducer,
  questionsReducer,
  scoreReducer,
  userReducer,
};

export const rootReducers = combineReducers(
  reducers
);

