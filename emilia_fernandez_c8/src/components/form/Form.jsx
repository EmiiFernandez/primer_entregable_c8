import { useState } from 'react'
import styles from './../form/Form.module.css'

function Form(props) {
  const [pelicula, setPelicula] = useState('')

  const [personaje, setPersonaje] = useState('')

  const [error, setError] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if (
      !pelicula ||
      !personaje ||
      pelicula.length < 3 ||
      personaje.length < 6
    ) {
      setError('Por favor chequea que la información sea correcta')
      return
    } else {
      props.onPelicula(pelicula, personaje)
      setError()
      console.log('Formulario enviado')
    }
  }

  function handlePelicula(e) {
    setPelicula(e.target.value.trim())
  }

  function handlePersonaje(e) {
    setPersonaje(e.target.value)
  }

  return (
    <>
      <h2>Queremos saber de tí...</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='pelicula'>¿Cúal es tu película favorita?</label>
        <input
          className={styles.input}
          type='text'
          id='pelicula'
          value={pelicula}
          onChange={handlePelicula}
        />

        <label htmlFor='personaje'>¿Cúal es tu personaje favorito?</label>
        <input
          className={styles.input}
          type='text'
          id='personaje'
          value={personaje}
          onChange={handlePersonaje}
        />
        {error ? <p>{error}</p> : undefined}
        <button className={styles.button} type='submit'>Enviar</button>
      </form>
    </>
  )
}
export default Form
