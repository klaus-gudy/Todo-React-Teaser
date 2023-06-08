import React from 'react';

function Listtodo({ todos, onDeletePost }) {
    const handleDelete = (id) => {
        onDeletePost(id);
      };
  return (
      <div className="max-h-64 overflow-y-hidden">
          {todos.length > 0 && (
              <ul className="bg-gray-200 p-4">
                  {todos.map((todo) => (
                      <li key={todo.id} className="text-xl mb-2">
                          <div className="flex items-center">
                              <label className=" font-bold mr-2">Title:</label>
                              <h3 className="text-lg">{todo.title}</h3>
                          </div>
                          <div className="flex items-center">
                              <label className=" font-bold mr-2">Description:</label>
                              <p className="text-sm">{todo.description}</p>
                          </div>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2 text-xs" onClick={() => handleDelete(todo.id)}>Delete</button>
                          <hr className="my-4 border-gray-300" />
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
}

export default Listtodo;