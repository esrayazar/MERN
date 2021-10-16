
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Subcontents from './components/Subcontents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App" style={{ 
      backgroundColor: "#dddddd", 
      width: "95%px", 
      maxheight: "700px"
      }}>
      <Header/>
      <div style={{
        display:'flex',
        margin:"auto",
        
    }}>
      <Navigation/>
      <Main>
        <Subcontents/>
        <Subcontents/>
        <Subcontents/>
        <Advertisement/>
      </Main>

      </div>


      
    </div>
  );
}

export default App;
