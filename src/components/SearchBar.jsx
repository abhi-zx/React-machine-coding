import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = async (value) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = await data.json()
        const results = userData.filter((user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(results)
        console.log(results);
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className ='inputWrapper'>
            <input placeholder='Type to search...'value={input} onChange={(e) => handleChange(e.target.value)} ></input>
        </div>
    )
}

export default SearchBar
