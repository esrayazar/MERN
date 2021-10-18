
import { useReducer, useState } from 'react';
import './App.css';
import Display from './components/Display';
import Forms from './components/Forms';

function App() {

  const [todoList, setTodoList] = useState([])


  return (
    <div className="App">

      <Forms todoList={todoList} setTodoList={setTodoList}/>
      <Display todoList={todoList} setTodoList={setTodoList}/>
      
    </div>
  );
}

export default App;
