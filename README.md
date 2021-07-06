# midudev-react-bootcamp-ejercicios-2-B-Formularios

2.7: La guía telefónica Paso2
Evita que el usuario pueda agregar nombres que ya existen en el directorio telefónico. Los arreglos de JavaScript tienen numerosos métodos adecuados para realizar esta tarea.

Emita una advertencia con el comando alert cuando se intente realizar una acción de este tipo:


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
