import React, {useState} from "react";
const Form = (props) =>{

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[confirmPassword, setConfirmPassword] = useState("")
    const{studentList, setStudentList}= props

    
    

    const submitHandler =(e) =>{
        e.preventDefault();
        
     
        setStudentList( [...studentList, {   
            
    
                "firstName" : firstName,
                "lastName"  : lastName,
                "email"     : email,
                "password"  : password,
                
    
    
            }] );
    }
    



    return(
        <div >
        
            <form onSubmit={(e) => submitHandler(e) }style={{width:"30%", textAlign:"center", margin:"auto"}}>
            
            
            <p>
            <label htmlFor="firstName">First Name </label>
            <input name="firstName" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </p>
            {
                firstName.length>0&&firstName.length<2?
                <span>Your First Name must be at least 2 charecters long! </span>
                :null
            }
            <p>
            <label htmlFor="lastName">Last Name </label>
            <input name="lastName" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </p>
            {
                lastName.length>0&&lastName.length<2?
                <span>Your Last Name must be at least 2 charecters long! </span>
                :null
            }
            <label htmlFor="email">Email  </label>
            <input name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>
            {
                email.length>0&&email.length<5?
                <span>Your email must be at least 5 charecters long! </span>
                :null
            }
            <label htmlFor="password">Password  </label>
            <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </p>
            {
                password.length>0&&password.length<8?
                <span>Your password must be at least 8 charecters long! </span>
                :null
            }
            <p>
            <label htmlFor="confirmPassword">Confirm Password  </label>
            <input name="confirmPassword" type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </p>
            {
                confirmPassword !== password?
                <span> Your password must match </span>
                :null
            }

            <button type="submit">SUBMIT</button>
        </form>
        {/* {
            studentList.map((student)=>(
                <p>
                    {student}
                </p>
            )) 
        } */}



        </div>

    )
}

export default Form;