import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; // importamos la función connect de Redux para conectar el componente con el store
import { fetchJoke, fetchJokeByCategory } from "./redux/actions"; // importamos las funciones para obtener chistes del store
import "./App.css";

const App = ({ joke, loading, error, fetchJoke, fetchJokeByCategory }) => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    // useEffect se ejecutará cuando se monte el componente y cuando cambie la categoría o las funciones fetchJoke y fetchJokeByCategory
    if (category) {
      // si se ha seleccionado una categoría
      fetchJokeByCategory(category); // obtenemos un chiste de la categoría seleccionada
    } else {
      // si no hay categoría seleccionada
      fetchJoke(); // obtenemos un chiste aleatorio
    }
  }, [category, fetchJoke, fetchJokeByCategory]);

  const handleRandomJokeClick = () => {
    // función para obtener un chiste aleatorio
    setCategory(""); // establecemos la categoría en vacío
  };

  const handleCategoryClick = (category) => {
    // función para obtener un chiste por categoría
    setCategory(category); // establecemos la categoría seleccionada en el estado
  };

  return (
    <div className="main">
      <h1>Chuck Jokes</h1>
      <img src="./img/chuck-norris-approved.gif" alt="chuck-gif" />
      <h3>Chuck Approves</h3>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{joke}</p>
      )}{" "}
      {/* mostramos el chiste o los mensajes de error o carga */}
      <button onClick={handleRandomJokeClick}>Get Random Joke</button>{" "}
      {/* botón para obtener un chiste aleatorio */}
      <div className="buttons_cat">
        <button onClick={() => handleCategoryClick("dev")}>Dev</button>{" "}
        {/* botón para obtener un chiste de la categoría "dev" */}
        <button onClick={() => handleCategoryClick("explicit")}>
          Explicit
        </button>{" "}
        {/* botón para obtener un chiste de la categoría "explicit" */}
        <button onClick={() => handleCategoryClick("food")}>Food</button>{" "}
        {/* botón para obtener un chiste de la categoría "food" */}
      </div>
      {category && <p>Category: {category}</p>}{" "}
      {/* mostramos la categoría seleccionada, si es que hay una */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  joke: state.joke, // el chiste actual
  loading: state.loading, // si se está cargando un chiste
  error: state.error, // si ha habido un error al obtener un chiste
});

const mapDispatchToProps = {
  fetchJoke, // obtener un chiste aleatorio
  fetchJokeByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
