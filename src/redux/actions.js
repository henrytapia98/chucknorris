/**
 * En el archivo actions.js, definimos las acciones que pueden ocurrir en la aplicación, tales como FETCH_JOKE_REQUEST, FETCH_JOKE_SUCCESS y FETCH_JOKE_FAILURE.
 * Cada acción es llamada en diferentes momentos del ciclo de vida de la aplicación, como cuando se solicita el chiste, cuando se recibe exitosamente o cuando ocurre un error.
 */
// Importar el módulo 'axios' para realizar solicitudes HTTP
import axios from "axios";

export const FETCH_JOKE_REQUEST = "FETCH_JOKE_REQUEST";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE";

// Definir una acción asincrónica para buscar una broma aleatoria
export const fetchJoke = () => async (dispatch) => {
  // Despachar una acción para indicar que se está realizando la solicitud
  dispatch({ type: FETCH_JOKE_REQUEST });

  try {
    // Realizar una solicitud HTTP GET a la API de Chuck Norris para obtener una broma aleatoria
    const response = await axios.get("https://api.chucknorris.io/jokes/random");

    // Despachar una acción para indicar que se ha obtenido una broma exitosamente
    dispatch({
      type: FETCH_JOKE_SUCCESS,
      // Incluir la broma obtenida en el objeto de carga útil de la acción
      payload: { joke: response.data.value },
    });
  } catch (error) {
    // Despachar una acción para indicar que ha ocurrido un error al obtener la broma
    dispatch({ type: FETCH_JOKE_FAILURE, payload: { error: error.message } });
  }
};

// Definir una acción asincrónica para buscar una broma aleatoria por categoría
export const fetchJokeByCategory = (category) => async (dispatch) => {
  // Despachar una acción para indicar que se está realizando la solicitud
  dispatch({ type: FETCH_JOKE_REQUEST });

  try {
    // Realizar una solicitud HTTP GET a la API de Chuck Norris para obtener una broma aleatoria por categoría
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    // Despachar una acción para indicar que se ha obtenido una broma exitosamente
    dispatch({
      type: FETCH_JOKE_SUCCESS,
      // Incluir la broma y la categoría obtenidas en el objeto de carga útil de la acción
      payload: { joke: response.data.value, category: category },
    });
  } catch (error) {
    // Despachar una acción para indicar que ha ocurrido un error al obtener la broma por categoría
    dispatch({ type: FETCH_JOKE_FAILURE, payload: { error: error.message } });
  }
};
