import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import DataComponent from './components/DataComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DataComponent path = "/:word"/>
        <DataComponent path="/:word/:color/:backgcolor"/>
        


      </Router>
      
    </div>
  );
}

export default App;
