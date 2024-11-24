import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Oninputvaluebase = () => {
    
    const[tag,settag] = useState("")
    const {gif,loading,fetchdata} = useGif(tag)
//     const [gif,setgif] = useState("")
//     const [loading,setloading] = useState(false)

//   const  API_KEY = `kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//     async function fetchdata()
//     {
//         try
//         {   
//             setloading(true)
//            const {data} = await axios.get(url)
//            const response = data.data.images.downsized_large.url
//            setgif(response)
//            setloading(false)
//         }
//         catch(e)
//         {
//             console.log("error throw in oninputevaluebase component")
//         }
//     }

//     useEffect(()=>{
//         fetchdata()
//     },[])

  return (
    <div>

      <div>RANDOM GIF</div>
      <div>
        {loading?<Spinner/>:<img src={gif}/>}
      </div>
      <input
        type='text'
        value={tag}
        onChange={(event)=>{
            settag(event.target.value)
        }}
      />
      <button onClick={fetchdata(tag)}>GENERATE</button>

    </div>
  )
}

export default Oninputvaluebase