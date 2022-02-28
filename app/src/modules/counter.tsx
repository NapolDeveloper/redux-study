// action type declare
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// action function
export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
/*
  declare function f1(): { a: number, b: string }
  type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
*/
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

// interface는 객체 타입을 생성함
// 원시값처럼 간단한 값을 이용할 때는 interface보다 type사용하기
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

// reducer

function counter(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1
      };
    case DECREASE:
      return {
        count: state.count - 1
      };
    case INCREASE_BY:
      return {
        count: state.count + action.payload
      };
    default:
      return state;
  }
}

export default counter;
