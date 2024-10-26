import React from 'react'
import "./SearchBarResults.css"
const SearchBarResults = ({ results }) => {
    return (
        <div className='resultwrapper'>
            {results.map((user,id) => <div className='results' key={id}>
                {user.name}
            </div>)}
        </div>
    )
}

export default SearchBarResults
