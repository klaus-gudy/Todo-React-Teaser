import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import { v4 as uuidv4 } from 'uuid';

uuidv4();

//GET https://dev.hisptz.com/dhis2/api/dataStore/${your-name }?fields=.

function App() {
  const [todos, setTodos] = useState([]);
  
  const onAddPost = todo =>{
    const newTodo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      completed: false,
      created: new Date().toLocaleString(),
      lastUpdated: new Date().toString()
    };
    setTodos([...todos, newTodo]);
    console.log(todos)
  }

  const onDeletePost = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <div className="App flex flex-col items-center justify-center min-h-screen">
        {/* <Navbar/> */}
        <p className="text-4xl font-bold text-center mt-8">TODO APP</p>

        <Addtodo onAddPost={onAddPost} />
        <Listtodo todos={todos} onDeletePost = {onDeletePost} />
{/* 
        <Routes>
          <Route path='/' element= { <Addtodo onAddPost={onAddPost} />}/>
          <Route path='/list' element= { <Listtodo/>}/>
        </Routes> */}
      </div> 
    </Router>
  );
}

export default App;
