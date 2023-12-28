import React from 'react';

const Tasks = () => {
  // Assuming you have a tasks array
  const tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ];

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
