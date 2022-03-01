import React from 'react';
import CounterContainer from './containers/CounterContainer';
import ProfileContainer from './containers/ProfileContainer';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div>
      <CounterContainer />
      <TodoApp />
      <ProfileContainer />
    </div>
  );
}

export default App;
