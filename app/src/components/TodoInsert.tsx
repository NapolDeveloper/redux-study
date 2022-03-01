import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');

  // ChangeEvent
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    // a 태그나 submit 태그는 누르게 되면 href를 통해 이동하거나
    // 창이 새로고침하여 실행된다. 이러한 경우를 막기위해 사용하는 것이 preventDefault()
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='할 일을 입력해주세요' value={value} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  );
}

export default TodoInsert;
