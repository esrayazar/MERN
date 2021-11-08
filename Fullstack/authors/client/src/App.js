import './App.css';
import {Router} from "@reach/router";
import AuthorsList from './components/AuthorsList';
import EditAuthor from './components/EditAuthor';
import NewAuthor from './components/NewAuthor';
import OneAuthor from './components/OneAuthor';
import { useState } from 'react';

function App() {
  const [author, setAuthor] = useState("");
  return (
    <div className="App">
      <Router>
        <AuthorsList path="/" />
        <NewAuthor path="/author/new" author={author} setAuthor={setAuthor}/>
        <OneAuthor path="/author/:id" />
        <EditAuthor path="/author/edit/:id" author={author} setAuthor={setAuthor} />

        
      </Router>
      
    </div>
  );
}

export default App;
