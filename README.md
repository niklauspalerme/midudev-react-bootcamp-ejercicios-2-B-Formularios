# midudev-react-bootcamp-ejercicios-2-B-Formularios

2.6: La guía telefónica Paso1
Creemos una guía telefónica simple. En esta parte solo agregaremos nombres a la agenda.

Codigo Base:
```
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```

![img](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/5a190/10e.png)
