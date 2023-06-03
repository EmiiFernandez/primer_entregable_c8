import { useState } from 'react'

import Card from './components/card/Card'
import Form from './components/form/Form'

import './App.css'

let getId = 0

function App() {
  const [peliculas, setPeliculas] = useState([])


  function handlePelicula(pelicula, personaje) {
    const nuevaPelicula = {
      id: getId++,
      nombre: pelicula,
      nombrePersonaje: personaje,
    }
    const peliculasUpgrade = [...peliculas, nuevaPelicula];
    setPeliculas(peliculasUpgrade);
  }

  return (
    <>
      <h1>¡Peliculas!</h1>
      <Form onPelicula={handlePelicula} />
      {peliculas.map((pelicula) => {
        return (
          <Card
            key={pelicula.id}
            nombre={pelicula.nombre}
            nombrePersonaje={pelicula.nombrePersonaje}
          />
        )
      })}
    </>
  )
}

export default App
