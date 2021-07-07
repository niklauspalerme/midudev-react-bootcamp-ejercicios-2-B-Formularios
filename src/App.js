import React, { useState } from 'react';
import Filter from './componentes/Filter';
import Form from './componentes/Form';
import Agenda from './componentes/Agenda';


const App = () => {


//////////////////////////////////////////////////////////////////////////////
//Variables-Estados

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNumber ] = useState('')
  const [filtro, setFiltro]= useState('')

  //Variable Condicional 
  const showContact = filtro.length === 0
  ? persons 
  : persons.filter(persona => persona.name.toLowerCase().includes(filtro.toLowerCase()))


  
  //////////////////////////////////////////////////////////////////////////////
  //Metodos


  //Controlador Input - Nombre
  const handlePersonChange = (event)=>{
    setNewName(event.target.value);
  }

  //Controlador Input - Numero
  const handleNumberChange = (event)=>{
    setNumber(event.target.value)
  }

  //Controlador Input - Filtrado
  const handleFilter = (event) =>{
    setFiltro(event.target.value)

  } 
  
  //Controlador Form
  const addPerson = (event)=>{
    event.preventDefault();
    let persona1 = {
      name: newName,
      number: newNumber
    }

    let found = persons.filter(per=> per.name === persona1.name)
    
    if(found.length >0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNumber('')
      document.getElementById('name').value = ''
      document.getElementById('number').value = ''
    }else{
      setPersons(persons.concat(persona1));
      setNewName('')
      setNumber('')
      document.getElementById('name').value = ''
      document.getElementById('number').value = ''
    }   

  }


//////////////////////////////////////////////////////////////////////////////
//return


  return (
    <div>
      <Filter handleFilter={handleFilter} name="Filter by Name"/>
      <Form  addPerson={addPerson} 
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        title="Add new Contact"/>
      <Agenda contacts={showContact} />
    </div>
  )
}

export default App