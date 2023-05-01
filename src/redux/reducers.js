/*
En el archivo reducers.js, creamos el reducer que maneja las diferentes acciones que definimos. 
Este reducer toma el estado actual de la aplicación y una acción, y devuelve un nuevo estado basado en la acción.
 */

import {
  FETCH_JOKE_REQUEST, // Importa la constante que define la acción de solicitud de chiste
  FETCH_JOKE_SUCCESS, // Importa la constante que define la acción de éxito en la obtención de chiste
  FETCH_JOKE_FAILURE, // Importa la constante que define la acción de falla en la obtención de chiste
} from "./actions";

const initialState = {
  joke: "", // El chiste obtenido
  loading: false, // Indica si la petición está en curso o no
  error: null, // El mensaje de error en caso de que falle la obtención del chiste
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_REQUEST: // Si se realiza una solicitud de chiste
      return {
        // Devuelve un nuevo estado actualizado con los valores correspondientes
        ...state,
        loading: true, // Se cambia el valor de 'loading' a true para indicar que la solicitud está en curso
        error: null, // Se limpia el mensaje de error en caso de que haya existido algún error anterior
      };
    case FETCH_JOKE_SUCCESS: // Si se obtiene el chiste correctamente
      return {
        ...state,
        joke: action.payload.joke, // Se actualiza el valor del chiste obtenido
        category: action.payload.category, // Se guarda la categoría del chiste obtenido
        loading: false, // Se cambia el valor de 'loading' a false ya que se ha obtenido el chiste
        error: null, // Se limpia el mensaje de error en caso de que haya existido algún error anterior
      };
    case FETCH_JOKE_FAILURE: // Si falla la obtención del chiste
      return {
        ...state,
        joke: "", // Se limpia el valor del chiste en caso de que haya existido algún valor anterior
        loading: false, // Se cambia el valor de 'loading' a false ya que se ha obtenido el chiste
        error: action.payload.error, // Se guarda el mensaje de error correspondiente
      };
    default:
      return state; // Si no se realiza ninguna acción, devuelve el estado actual
  }
};
