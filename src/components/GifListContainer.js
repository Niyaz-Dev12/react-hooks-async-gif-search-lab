import React,{useState,useEffect} from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
const [img,setImg]=useState([]);
const [term,setTerm]=useState(null);

  useEffect(()=>{
    if(term===null){

    }
    else {
     fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=YCvRtUUiXVgKixJRUTZgBaz2ZW6sTvH1&rating=g`).then(res=>res.json()).then(data=>setImg([data.data[0],data.data[1],data.data[2]]))}

     return function cleanup(){
          setImg([]);
     }
  },[term]);


 function handleSubmit(value,e){
   e.preventDefault();
   setTerm(value);
 }

  console.log(term);

  return (
    <>
      <GifSearch onSubmit={handleSubmit} />
      <br />
      <GifList arrUrl={img} />
    </> 
  )
}

export default GifListContainer
