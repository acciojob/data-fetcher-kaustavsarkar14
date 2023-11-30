
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(data => data.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  })
  if (isLoading) return <h1>Loading...</h1>
  if(data.message) return <h1>An error occurred: {data.message}</h1>
  return (
    <div>
      <h1>Data Fetched from API</h1>
      <pre>
        {/* Do not remove the main div */}
        {JSON.stringify(data,null,2)}
      </pre>
    </div>
  )
}

export default App
