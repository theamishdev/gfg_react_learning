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
    <div>
      <button onClick={() => setcount(count + 1)}>click- {count}</button>
      {quote.map(q => (
        <p key={q.id}>{q.quote} — {q.author}</p>
      ))}
    </div>
  )
}
