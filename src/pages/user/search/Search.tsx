import React from 'react'

interface searchProps{
    query:string
}

const Search = ({query}:searchProps) => {
  return (
    <div>{query}</div>
  )
}

export default Search