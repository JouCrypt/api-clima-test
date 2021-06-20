import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
 //busqueda
  const [error, setError] = useState(false)
   
 
//extraer
const {ciudad, pais}= busqueda;

//funcion que coloca los documentos en el state
const handlerChange = e =>{
    const {name, value}= e.target;
    setBusqueda({...busqueda, [name]:value});
}
 
//validar formulario
const handlerSubmit = e =>{
    e.preventDefault();

    //validar
 if(ciudad.trim()==='' || pais.trim()==='')
 {
     setError(true);
    
     return;
 }
    setError(false);

    //pasarlo al componente principal
 setConsultar(true);

};


    return ( 
    <form
    onSubmit={handlerSubmit}
    >   
    {error? <Error mensaje="Todos los campos son obligatorios"/> :null}
    <div className="input-field col s12">
    <input type="text"
    name="ciudad"
    id="ciudad"
    value={ciudad}
    onChange={handlerChange}
    />
     <label htmlFor="ciudad">Ciudad:</label>
    </div>
    <div className="input-field col s12">
    
    <select
    name="pais"
    id="pais"
    value={pais}
    onChange={handlerChange}
    >
    <option >--Selecione un país--</option>
    <option value="US">Estados Unidos</option>
    <option value="MX">México</option>
    <option value="PA">Panamá</option>
    <option value="CO">Colombia</option>
    <option value="CR">Costa Rica</option>
    <option value="ES">España</option>
    <option value="PE">Perú</option>
    </select>
    <label htmlFor="pais">País:</label>
    
 </div>
 <div className="input-field col s12">
     <input type="submit" value="Buscar Clima" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
     
 </div>
 </form> 
   
     );
}
Formulario.propTypes = {
    
    busqueda:PropTypes.object.isRequired, 
    setBusqueda:PropTypes.func.isRequired,
    setConsultar:PropTypes.func.isRequired
  }
export default Formulario;