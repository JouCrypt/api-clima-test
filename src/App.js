import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {
  const [error, setError] = useState(false)
 const [consultar, setConsultar] = useState(false); 
  const [clima, setClima] = useState({})
//busqueda
const [busqueda, setBusqueda] = useState({
  ciudad:"",
  pais:""  
});
//extraer
const {ciudad, pais}= busqueda;


useEffect(() => {
  const consultarAPI = async () =>{
     if (consultar){
 
    const appId= '4c98adcd19fdc37fcb9cf00e72043b9b';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setClima(resultado);
    setConsultar(false);

    //detecta resultado
    if(resultado.cod === "404" ){
      setError(true);
    }else{
      setError(false);
    }
     
   };
 };
 consultarAPI();

 //eslint-disable-next-line
}, [consultar]);
 let componente;
if(error){
 componente = <Error mensaje="No hay resultados"/>
}else
{
  componente =<Clima
  clima={clima}/>
}

  return (
    <Fragment>
    <Header
    titulo='Clima React App'
    />
  <div className="contenedor-form">
    <div className="container">
      <div className="row">
        <div className="col m6 s12">
          <Formulario
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar}/>
        </div>
        <div className="col m6 s12">
       {componente}
        </div>
      </div>
      
    </div>
  </div>
  
  </Fragment>
  );
}

export default App;
