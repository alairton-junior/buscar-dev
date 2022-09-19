import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './styles.css'

export default function Search(props) {
    
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        props.getUser(inputValue)
        setInputValue('')
    }

    function handleChange(event) {
        setInputValue(event.target.value)
        
    }


    return (
        <form onSubmit={handleSubmit} className="Search">
            <FaSearch className="icon-search"/>
            
            <input onChange={handleChange} value={inputValue} placeholder="Buscar dev no GitHub" type="text"/>
            <button type="submit">Search</button>
        </form>
    )
}