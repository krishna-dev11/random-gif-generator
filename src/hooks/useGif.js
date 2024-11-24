import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const useGif = (git ) => {
  
    const[gif,setgif] = useState("")
    const [loading,setloading]=useState(false)
  
    let API_KEY = `kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  
    async function fetchdata(tag)
    {
      try
      {
        setloading(true)
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` :url)
        const response = data.data.images.downsized_large.url;
        setgif(response)
        setloading(false)
      }
      catch(e)
      {
        console.log("hi")
      }
    }
  
    useEffect(()=>{
      fetchdata()
    },[])

  return {gif,loading,fetchdata}
}

export default useGif