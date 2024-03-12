import React from 'react'
import { useState } from 'react'

function SearchBar(props: any){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e: any) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e: any) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
