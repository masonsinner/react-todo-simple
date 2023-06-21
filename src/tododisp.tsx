import React from 'react';

interface ToDoDisplayProps {
  tasks: string[];
}

const ToDoDisplay: React.FC<ToDoDisplayProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};

export default ToDoDisplay;
