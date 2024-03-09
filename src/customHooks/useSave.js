import { useState, useEffect } from "react"

export function useSave({url, method, body}){
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url, {
      method: method,
      body: body
    })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return { data: data }
}