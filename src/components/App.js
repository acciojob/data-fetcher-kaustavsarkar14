
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(data=>data.json())
    .then(data=>{
      setData(data)
      setLoading(false)
    })
  })
  if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
        {/* Do not remove the main div */}
      {JSON.stringify(data)}
    </div>
  )
}

export default App
