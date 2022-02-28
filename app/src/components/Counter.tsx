import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

/* 위 type과 interface로 구현했을 때의 차이점은??
interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}
*/

function Counter({ count, onIncrease, onDecrease, onIncreaseBy }: CounterProps) {
  return (
    <div>
      {/* h1을 쓰는것은 시맨틱요소이며 header 중 최상위로 인식 될 가능성이 있음 */}
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;
