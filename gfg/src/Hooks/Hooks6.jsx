import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Hooks6() {
  const [count, setcount] = useState(1)
  const [quote, setquote] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/quotes')
        setquote(res.data.quotes)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="component-container">
      <h2 className="component-title">Axios Async/Await (Hooks6)</h2>
      <button onClick={() => setcount(count + 1)} className="styled-button">Re-render Trigger: {count}</button>

      <div style={{ maxHeight: '300px', overflowY: 'auto', marginTop: '15px' }}>
        {quote.length > 0 ? quote.map(q => (
          <div key={q.id} className="list-item">
            <p style={{ margin: 0, fontStyle: 'italic' }}>"{q.quote}"</p>
            <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: '#888', textAlign: 'right' }}>- {q.author}</p>
          </div>
        )) : <p>Loading quotes...</p>}
      </div>
    </div>
  )
}
