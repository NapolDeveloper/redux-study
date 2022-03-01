import React from 'react';
// import styled from 'styled-components';

// const StateBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   border: 1px solid red;
// `;

type ProfileProps = {
  profileStr: string;
  onChange: (str: string) => void;
};

function Profile({ profileStr, onChange }: ProfileProps) {
  return (
    <div>
      <h1>{profileStr}</h1>
      <div>
        <button onClick={() => onChange('온라인')}>온라인</button>
        <button onClick={() => onChange('자리비움')}>자리비움</button>
        <button onClick={() => onChange('다른용무중')}>다른용무중</button>
        <button onClick={() => onChange('오프라인')}>오프라인</button>
      </div>
    </div>
  );
}

export default Profile;
