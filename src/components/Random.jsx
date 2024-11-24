import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

  // const[gif,setgif] = useState("")
  // const [loading,setloading]=useState(false)

  // let API_KEY = `kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`
  // // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  // async function fetchdata()
  // {
  //   try
  //   {
  //     setloading(true)
  //     const {data} = await axios.get(url)
  //     const response = data.data.images.downsized_large.url;
  //     setgif(response)
  //     setloading(false)
  //   }
  //   catch(e)
  //   {
  //     console.log("hi")
  //   }
  // }

  // useEffect(()=>{
  //   fetchdata()
  // },[])

  const {gif,loading,fetchdata} = useGif()

  return (
    <div>

      <div>A RANDOM GIFS</div>

      <div>
        {loading?<Spinner/>:<img src={gif}/>}
      </div>

      <button onClick={()=>fetchdata()}>GENERATE</button>

    </div>
  )
}

export default Random