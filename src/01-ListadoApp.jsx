import { useState } from "react";
import { AgregarTarea } from "./componentes/01.1-AgregarTarea";

const Items = ({nombre, visto}) => {
  return(
      <li className="rojo"> {nombre}
        {visto ? '✔' : '❌'} {/*INCLUYENDO LOS FALSE MUESTRA*/}
       {/*{visto && '✔'}  SOLO LOS QUE SON TRUE APARECEN EN LA PAG SE LLAMA : "TERNARIO"*/}
       </li>
  );
};

export const ListadoApp = () => {
  {/*const addTask = () => {
    setArreglo([...arreglo, {nombre:'nuevo', visto:'false'}])
  }*/}
 
  let listadoSecciones = [
  { id: 0,nombre: "Instalaciones necesarias", visto:true },
  { id: 1,nombre: "Uso de Vite", visto:true },
  { id: 2,nombre: "Componente", visto:true },
  { id: 3,nombre: "Variables de JSX", visto:true },
  { id: 4,nombre: "Props", visto:true },
  { id: 5,nombre: "Eventos", visto:true },
  { id: 6,nombre: "useState", visto:true },
  { id: 7,nombre: "Redux", visto:false },
  { id: 8,nombre: "customHooks", visto:false },
]

  const [arreglo, setArreglo] = useState(listadoSecciones)
  const onAgregarTareas = (val) => {
    let valor = val.trim
    if(val < 1) return
    const envio ={
      id: arreglo.length,
      nombre: val,
      visto: false
    }
    setArreglo([...arreglo, envio])
  }
  return(
    <>
      <h1>Listado de cadenas del Curso</h1>
        <AgregarTarea agregartarea={onAgregarTareas}></AgregarTarea>
      <ol>
        {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>

    </>
  );
}; 
