
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Subcontents from './components/Subcontents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "lightGrey", width: "20%px", maxheight: "700px"}}  >
      <Header/>
      <Navigation/>
      <Main>
        <Subcontents/>
        <Subcontents/>
        <Subcontents/>
        <Advertisement/>



      </Main>


      
    </div>
  );
}

export default App;
