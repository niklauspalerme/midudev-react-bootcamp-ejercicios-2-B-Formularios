# midudev-react-bootcamp-ejercicios-2-B-Formularios

2.10: La guía telefónica Paso5

Si ha implementado su aplicación en un solo componente, refactorice extrayendo las partes adecuadas en nuevos componentes. Mantenga el estado de la aplicación y todos los controladores de eventos en el componente raíz de App.

Es suficiente extraer tres componentes de la aplicación. Buenos candidatos para componentes separados son, por ejemplo, el filtro de búsqueda, el formulario para agregar nuevas personas a la agenda telefónica, un componente que muestra a todas las personas de la agenda telefónica y un componente que muestra los detalles de una sola persona.

El componente raíz de la aplicación podría verse similar a esto después de la refactorización. El componente raíz refactorizado a continuación solo representa los títulos y permite que los componentes extraídos se encarguen del resto.


```
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```

NB: Es posible que tenga problemas en este ejercicio si define sus componentes "en el lugar equivocado". Ahora sería un buen momento para ensayar el capítulo no defina un componente en otro componente de la última parte.
