import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  './styles.css';
import { UserApp } from "./UserApp";
/* import { ListadoApp } from "./01-ListadoApp.jsx"; 
 import { ContadorApp } from "./componentes/02-ContadorApp.jsx"; */

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <ContadorApp value={0}/> */}
  {/* <ListadoApp/> */}
    <UserApp/>
  </StrictMode>,
  
);
