import { deprecated, ActionType, createReducer } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 type 선언하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성함수 선언
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

// 액션 객체 타입
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣기
type CounterAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있다

// 이 리덕스 모듈에서 관리 할 상태의 타입 선언
type CounterState = {
  count: number;
};

// 초기상태 선언
const initialState: CounterState = {
  count: 0
};

// createReducer는 리듀서를 쉽게 만들 수 있게 해주는 함수
// Generics로 리듀서에서 관리할 상태, 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야 함
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
});

export default counter;
