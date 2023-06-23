import React from 'react';

interface ToDoDisplayProps {
  tasks: string[];
  removeTask: (index: number) => void;
}

const ToDoDisplay: React.FC<ToDoDisplayProps> = ({ tasks, removeTask }) => {
  const handleRemoveTask = (index: number) => {
    removeTask(index);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          {task}
          <button onClick={() => handleRemoveTask(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoDisplay;
