import { useState, } from "react"

export const AgregarTarea = ({ agregartarea }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregartarea(inputValue)
    }
        
    
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Ingresá Tarea nueva"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

