import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

import AppConText from "./context/AppConText";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  

  <React.StrictMode>
    <AppConText>
      <BrowserRouter>
   
        <App />
      </BrowserRouter>
    </AppConText>
  </React.StrictMode>
);
