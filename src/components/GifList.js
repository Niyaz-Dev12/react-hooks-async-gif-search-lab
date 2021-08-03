import React from 'react'

function GifList({arrUrl}) {
console.log(arrUrl)

const urlArray=arrUrl.map((url,index)=>{ 
return <li key={index}><img src={url.images.original.url} alt="" /></li>
})
  
  return (
    <ul>
      {urlArray}
    </ul>
  )
}

export default GifList
