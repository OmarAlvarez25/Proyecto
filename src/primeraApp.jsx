import { useState } from "react"

const FrirstApp = ({ value})=> {
    const[ counter, setCounter] = useState (value)

    const handleAdd = () => {
        const valor = counter +0.447 
        console.log( typeof counter, typeof valor, Number(valor) )
        setCounter (Number(Number(valor).toFixed(3)))
    
    }
    const handleSubsstract = () => {
        const valor = counter -0.447 
        console.log( typeof counter, typeof valor, Number(valor) )
        setCounter (Number(Number(valor).toFixed(3)))
    }
    const handleReset = () => {
        setCounter(value)
    }
    return (
        <>
          <h1>Counter</h1>
          <span>{ counter }</span>
          <button onClick={ () => handleAdd() }> +1 </button>
          <button onClick={ () => handleSubsstract() }> -1 </button>
          <button onClick={ () => handleReset() }> Reset </button>
        </>
    )
} 

/*const FrirstApp = ({value}) => {

    const handleAdd = () => {
      console.log("calling handleaAdd")
    }
  
    return (
      <>
        <h1>Counter</h1>
        <span>{ value }</span>
        <button onClick={() => handleAdd() }>+1 </button>
      </>
    )
    }*/
  export default FrirstApp