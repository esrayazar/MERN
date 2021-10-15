import React, {useState} from "react";
const Form = (props) =>{

    const [studentList, setStudentList] = useState([]);
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[confirmPassword, setConfirmPassword] = useState("")

    // const submitHandler =(e) =>{
    //     e.preventDefault(e);

    //     setStudentList([...studentList, {
    //         firstName: {firstName},
    //         lastName: {lastName},
    //         email: {email},
    //         password: {password},
    //         confirmPassword: {confirmPassword}
    //     }])

    // }
    


    return(
        <div >
        
            <form style={{width:"30%", textAlign:"center", margin:"auto"}}>
            <p>
            <label htmlFor="firstName">First Name </label>
            <input name="firstName" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
            <label htmlFor="lastName">Last Name </label>
            <input name="lastName" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </p>
            <label htmlFor="email">Email  </label>
            <input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>
            <label htmlFor="password">Password  </label>
            <input name="password" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </p>
            <p>
            <label htmlFor="confirmPassword">Confirm Password  </label>
            <input name="confirmPassword" type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </p>
        </form>
        <div>
            <p>Your Form Data</p>
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>

        </div>


        </div>

    )
}

export default Form;