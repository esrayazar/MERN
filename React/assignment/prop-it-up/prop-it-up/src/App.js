
import './App.css';
import PersonCard from './components/PersonCard';

const App = (props) =>{

  //  const firstName= (props) = (name) =>{
  //   return name;
  // }
  // const lastName= (props) = (lastname) =>{
  //   return lastname;
  // }
  // const age = (props) =(age) =>{
  //   return age;
  // }
  // const HairColor =(props) =(haircolor) =>{
  //   return haircolor;
  // }
  // <Person lastName={"shrute"} firstName={"dwight"} age={4} hairColor={"auburn"}/>
  //     <Person lastName={"halpert"} firstName={"jim"} age={32} hairColor={"brown"}/>
  //     <Person lastName={"beasley"} firstName={"pam"} age={29} hairColor={"auburn"}/>
  //     <Person lastName={"scott"} firstName={"michael"} age={40} hairColor={"brown"}/>

  return (
    <div className="App">
      <PersonCard 
      lastName = "Doe"
      firstName="Jane"
      age="45"
      HairColor="Black"/>
      <PersonCard 
      lastName ="Smith" 
      firstName="John"
      age="88"
      HairColor="Brown"/>
      <PersonCard 
      lastName ="Fillmore"  
      firstName="Millard"
      age="50"
      HairColor="Brown"/>
      <PersonCard 
      lastName ="Smith" 
      firstName="Maria"
      age="62"
      HairColor="Brown"/>

      
    </div>
  );
}

export default App;
