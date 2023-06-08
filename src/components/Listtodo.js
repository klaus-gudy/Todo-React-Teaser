import React from 'react';

function Listtodo({ todos, onDeletePost }) {
    const handleDelete = (id) => {
        onDeletePost(id);
      };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listtodo;