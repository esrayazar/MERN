
import './App.css';
import Form from './components/Form';
import React, {useState} from "react"

function App() {
  const [studentList, setStudentList]= useState([]);
    
  return (
    <div className="App">
      <Form studentList = {studentList} setStudentList={setStudentList}/>
      
    </div>
  );
}

export default App;
