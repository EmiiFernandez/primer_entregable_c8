import styles from './../card/Card.module.css'

function Card(props) {
  return (
      <div className={styles.card}>
        <h2>Pelicula: {props.nombre}</h2>
        <h3>Personaje: {props.nombrePersonaje}</h3>
      </div>
  )
}

export default Card
