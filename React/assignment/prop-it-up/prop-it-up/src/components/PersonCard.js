import React from 'react';

const PersonCard =(props) =>{

    const{lastName, firstName,age,HairColor} =props;
    return(
        <div className='PersonCard'>
            <p className="name">{lastName}, {firstName}</p>
            <p className="desc">Age: {age}</p>
            <p className="desc">Hair Color: {HairColor}</p>

        </div>
    )

}


export default PersonCard;