import React, { useState } from 'react'

//NOTA Sobre el renderizado:
//Usando los hooks cada vez que un estado cambia renderiza el componente
//Entonces el filtrado dinamico, ocurre ya que como estamos guardando la info
//en un estado que se va modificando. Vamos renderizando todo y aparte
//COmo se creo una variable condicional . Esta se actualiza ya que depende
//Del estado que estamos actualizando que es el input-filtro 
//Entonces al aculizarse el estado del filtro. Se actualiza la variable condicional showContact
//Y luego esa variable lo que vamos hacer en el return es siempre mapearla

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
  : persons.filter(persona => persona.name.toLowerCase().includes(filtro))


  
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
      <h2>Phonebook</h2>
      <div>
        Filter: <input onChange={handleFilter}/>
      </div>
      <h2>Add new contact</h2>
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
      <h2>Numbers</h2>
      <ul>
        {
          showContact.map( (per,index)=> <li key={index}> Name: {per.name} & Number: {per.number}</li>)
        }
      </ul>
    </div>
  )
}

export default App
