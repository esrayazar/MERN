
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects title={"Window Wizard"} likesCount={3} description={"College Student window washing"}/>
      <Projects title={"Puppy Rescue"} likesCount={13} description={"Find a foster family for poppies"}/>
      <Projects title={"Restroom Rater"} likesCount={2} description={"Ratings for public restrooms"}/>
      
    </div>
  );
}

export default App;
