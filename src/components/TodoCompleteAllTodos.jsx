import React from 'react';

function TodoCompleteAllTodos(props) {
  return (
    <div>
      <div onClick={props.completeAllTodos} className="button">
        Check All
      </div>
    </div>
  );
}

export default TodoCompleteAllTodos;
