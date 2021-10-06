import React, {useState} from 'react'
const Profile =(props) =>{
    const {name, age, hairColor, birthdayButton} =props
    const [currentAge, setCurrentAge] = useState(age)

    const increaseAge = (e) =>{
        setCurrentAge (currentAge +1);

    }
   

    return(
    <div>
        <h2>{name}</h2>
        <h4>Age: {currentAge}</h4>
        <h4>hair color:{hairColor}</h4>
        <button onClick={e =>increaseAge(e)}>{birthdayButton}</button>
    </div>
    )
}

export default Profile