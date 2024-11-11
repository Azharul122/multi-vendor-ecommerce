import React from 'react'
import { useLocation } from 'react-router-dom'

interface searchProps{
    query:string
}

const Search = () => {
const location=useLocation()
  const query=new URLSearchParams(location.search).get("query")
  // const query=location.state
  return (
    <div>
      <p>{query}</p>
      <p>Hello</p>
    </div>
  )
}

export default Search