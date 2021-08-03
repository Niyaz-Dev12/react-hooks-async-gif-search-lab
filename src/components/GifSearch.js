import React,{useState} from 'react'

function GifSearch({onSubmit}) {
  const [value,setValue]=useState("");
 const handleValue=(e)=>{
setValue(e.target.value);
 }

  return (
    <form className="form-inline" onSubmit={(e)=>onSubmit(value,e)}>
     <div className="form-group mb-2 "><label htmlFor="search">Enter a Search Term: </label>
      <input className="form-control" type="text" name="search" id="search" value={value} onChange={handleValue} />
      </div>
      <input className="btn btn-primary" type="submit" value="Find Gifs"  />
    </form>
  )
}

export default GifSearch
