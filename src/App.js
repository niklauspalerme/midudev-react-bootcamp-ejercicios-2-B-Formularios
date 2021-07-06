import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('')

  //Metodos controladores de Eventos
  const handldePersonChange = (event)=>{
    setNewName(event.target.value);
  }

  const addPerson = (event)=>{
    event.preventDefault();
    let persona1 = {
      name: newName
    }
    setPersons(persons.concat(persona1));
    setNewName('')
    document.getElementById('Input').value = ''

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handldePersonChange} id="Input"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map( (per,index)=> <li key={index}>{per.name}</li>)
        }
      </ul>
      <div>debug: {newName}</div>

    </div>
  )
}

export default App