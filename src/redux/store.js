/**
 * En el archivo store.js, creamos el store de Redux que contiene el estado de la aplicación y los reducers correspondientes que lo manejan.
 * Usamos el componente Provider de react-redux para conectar el store de Redux con nuestra aplicación de React.
 */
import { createStore, applyMiddleware } from "redux"; // Importa la función createStore y applyMiddleware de la librería Redux
import thunkMiddleware from "redux-thunk"; // Importa el middleware thunk de Redux
import { reducer } from "./reducers"; // Importa el reducer de la aplicación

const store = createStore(reducer, applyMiddleware(thunkMiddleware)); // Crea el store de Redux con el reducer de la aplicación y el middleware thunk

export default store; // Exporta el store por defecto
