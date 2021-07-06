# midudev-react-bootcamp-ejercicios-2-B-Formularios

2.8: La guía telefónica Paso3
Amplíe su aplicación permitiendo a los usuarios agregar números de teléfono a la guía telefónica. Deberá agregar un segundo elemento input al formulario (junto con su propio controlador de eventos):

```
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
}
```
En este punto, la aplicación podría verse así. La imagen también muestra el estado de la aplicación con la ayuda de React developer tools:

![img](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)

Implemente un campo de búsqueda que pueda usarse para filtrar la lista de personas por nombre:

![img](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)


Puede implementar el campo de búsqueda como un elemento input que se coloca fuera del formulario HTML. La lógica de filtrado que se muestra en la imagen no distingue entre mayúsculas y minúsculas, lo que significa que el término de búsqueda arto también devuelve resultados que contienen Arto con una A mayúscula.

NB: Cuando están trabajando en una nueva funcionalidad, a menudo es útil "codificar" algunos datos ficticios en su aplicación, por ejemplo

```
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  // ...
}
```

Esto evita tener que ingresar datos manualmente en su aplicación para probar su nueva funcionalidad.
