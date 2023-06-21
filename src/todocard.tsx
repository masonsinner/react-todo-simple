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

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Form addTask={this.addTask} />
        <ToDoDisplay tasks={tasks} />
      </div>
    );
  }
}

export default ToDoCard;
