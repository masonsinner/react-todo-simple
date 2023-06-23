import React from 'react';
import Form from './form';
import ToDoDisplay from './tododisp';

interface ToDoCardState {
  tasks: string[];
}

class ToDoCard extends React.Component<{}, ToDoCardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task: string) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  removeTask = (index: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Form addTask={this.addTask} />
        <ToDoDisplay tasks={tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default ToDoCard;
