import './App.css';
import Forms from './components/Form';
import React, {useReducer} from 'react';

const initialState = {
      firstName: {
          value: '',
          error: null
      },
      lastName: {
          value: '',
          error: null
      },
      email: {
          value: '',
          error: null
      }
  };
const reducer =(state, action) =>{
  
}  


function App() {
  return (
    <div className="App">
      <Forms/>
    </div>
  );
}

export default App;
