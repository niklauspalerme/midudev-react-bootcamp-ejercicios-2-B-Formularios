import React from 'react'

const Form = ({addPerson,handlePersonChange,handleNumberChange,title}) =>{

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={addPerson}>
                <div> 
                    name: <input onChange={handlePersonChange} id="name"/>
                </div>
                <br></br>
                <div>
                    number: <input  onChange={handleNumberChange} id="number"/>
                </div>
                <br></br>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )

}


export default Form ;