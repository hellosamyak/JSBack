import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [facts, setFacts] = useState([])

  useEffect(() => {
    axios.get('/api/facts')
      .then((response) => {
        setFacts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Facts: {facts.length}</h1>

      {
        facts.map((fact, index) => (
          <div key={fact.id}>
            <h3>{fact.title}</h3>
            <p>{fact.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App