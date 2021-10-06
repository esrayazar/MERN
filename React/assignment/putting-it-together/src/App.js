
import './App.css';
import Profile from './components/Profile';

function App() {

  const profileInfo = [
    {
      name: "Doe, Jane ",
      age: 45,
      hairColor: "Black",
      birthdayButton: "Birthday Button for Jane Doe"

    },

    {
      name: "Smith, John ",
      age: 88,
      hairColor: "Brown",
      birthdayButton: "Birthday Button for John Smith "

    }
  ]
  return (
    <div className="App">{

      profileInfo.map((object,index) =>(
        <Profile key = {index}
        name={object.name}
        age={object.age}
        hairColor={object.hairColor}
        birthdayButton={object.birthdayButton}
        />
      ))
      }    
    </div>
  );
}

export default App;
