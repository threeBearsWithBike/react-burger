import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [result, setResult] = useState({});
    useEffect(() => {
      fetch(url)
      .then(response => response.ok ? response.json() : Promise.reject(`Error ${response.status}`))
      .then(response => setResult(response))
      .catch(console.error);
  
    }, [url]);

    return result;
} 