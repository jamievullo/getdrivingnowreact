import React from 'react'

export default function Congratulations(props) {

    return (
        <div className='congratulations'>
            <h3 style={{color: "white"}}>Congratulations {props.location.state.currentUser.first_name}, you did it!!!</h3>
            <div style={{height: "650px"}}></div>
        </div>
    )
}
