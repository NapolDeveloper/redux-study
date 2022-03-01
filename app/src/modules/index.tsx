// 루트 리듀서
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import profile from './profile';

const rootReducer = combineReducers({
  counter,
  todos,
  profile
});

export default rootReducer;

// 루트 리듀서의 반환값을 유추
// 이 부분 잘 이해 안감
export type RootState = ReturnType<typeof rootReducer>;
