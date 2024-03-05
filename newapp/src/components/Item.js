import React, { useEffect, useState } from 'react'
import milkshakes from './img/milkshakes.jpg'
import Nvbar from './Nvbar'
import App from '../App'
//import lemon from './img/lemon.jpg'


export default function Item({Name,Check}) 
{
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('https://project-6fo3.onrender.com/users')
    .then(res=>res.json())
    .then(data=>
      setdata(data))
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
      <h2 className="sc-eACynP eeicYZ">{Name}  </h2>
      <div className="sc-gjTGSA eHuqRc">
      {data.filter(j=>j.Category===Name).map((e)=>{ 
        return  <div className="sc-kgKVFY dvrVHl">
        <img src={`./image/${e.Item}.jpg`} alt={`${e.Item}`} border="0"></img>
        <div className="sc-fLQRDB gkXfoc">
        <span className="sc-bALXmG gVmIFE">{e.Item}</span>
        <span className="sc-ivnCJf cXaOnw">{e.Price}</span>
        </div><button className="sc-gLDzan sc-fsQiph jbMNP cDfQDd"  onClick={()=>Check(e.Item,e.Price,"fd")} >Add to cart</button></div>
        
}
) }
      </div>
    </div>

  )
}
