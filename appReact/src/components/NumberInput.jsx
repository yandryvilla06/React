import React,{ useState }  from 'react'
import PropTypes from 'prop-types'
import Resultado from "./Resultado";
import { operaciones } from '../helpers/operaciones';




const NumberInput = ()=> {

  
    const [numeros, setNumeros] = useState(

       {

        numero1:0,
        numero2:0

       }

    )
    
    const {handleChange,sumar,restar,dividir,multiplicar,numero1,numero2}=operaciones(numeros,setNumeros)

      
  return (
    <>
    <label>Numero1:{" "}</label>
      <input name="numero1" value={numero1}  onChange={handleChange} type="number" />
      <label>Numero2:{" "}</label>
      <input  name="numero2" value={numero2}  onChange={handleChange} type="number" />
      <Resultado operacion="Suma" calculo={sumar()} />
      <Resultado operacion="Resta" calculo={restar()} />
      <Resultado operacion="Division" calculo={ dividir()} />
      <Resultado operacion="Multiplicacion" calculo={multiplicar()}/>
    </>
  )
}

NumberInput.propTypes = {

    name:PropTypes.string
    
}

export default NumberInput