import React from 'react';
import Nav from './nav';
import ToDoCard from './todocard';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <ToDoCard />
    </div>
  );
};

export default App;
