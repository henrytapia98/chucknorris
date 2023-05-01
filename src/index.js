import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import Footer from "./Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Aqui esta el provider que se uso para conectar el store con la aplicacion de React
  <Provider store={store}>
    <App />
    <Footer />
  </Provider>
);
