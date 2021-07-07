import React from 'react'

const Agenda = ({contacts}) =>{

    return(
        <>
            <h2>Numbers</h2>
            <ul>
            {
            contacts.map( (per,index)=>
                <li key={index}> Name: {per.name} & Number: {per.number}</li>)
            }
            </ul>
        </>
    )
}

export default Agenda;