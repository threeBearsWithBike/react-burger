import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [result, setResult] = useState({});
    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(response => setResult(response))
      .catch(err => console.log(err));
  
    }, [url]);

    return result;
} 