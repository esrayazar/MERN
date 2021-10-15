import './App.css';
import React, { useState } from 'react';
import Forms from './components/Forms';
import Header from './components/Header';
import Display from './components/Display';

function App() { 

const [boxList, setBoxList]=useState([])


  return (
    <div className="App">
      <Header/>
      <Forms boxList={boxList} setBoxList={setBoxList}/>
      <Display boxList={boxList}/>
      
      
    </div>
  );
}

export default App;
