import React, {useReducer, useState} from "react"

const Forms=(props)=>{

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const {newUser, setNewUser} = props

const submitHandler =(e) =>{

    e.preventDefault();
    
    setNewUser ( [...newUser, {
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email
    }

    ]

    )
}


    return(
        <div>
            <form onSubmit= {(e)=>submitHandler(e)}>
                <div>
                <label>First Name</label> <br/>
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value) }/> <br/>
                {/* ...
                return (
                     ...
                {state.firstName.error !== null && (
                <p className="error">{state.firstName.error}</p>
                )}
                ...
); */}

                </div>
                <div>
                <label>Last Name</label> <br/>
                <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value) }/> <br/>
                </div>
                <div>
                <label>Email</label> <br/>
                <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value) }/> <br/>
                </div>


                <button type="submit">SUBMIT</button>




            </form>

        </div>

    );


}


export default Forms;