import React from 'react'
import {articles} from './Inside';
import { useState } from 'react';
import { useEffect } from 'react';
//import Lemon from './img/lemon.jpg'

export default function Shop({Check}) {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res=>res.json())
    .then(data=>
      setdata(data))
    .catch(err=>console.log(err))
  },[])
  
  return (
    <div>
      <div className="sc-cyRfQX fIikTU">
      {articles.map((element)=>{
      return <> <h2><a className="sc-lnAgIa ffVeeb" href={`/${element.name}`}><u>{`${element.name}`}</u></a></h2>
        <div className="sc-iKGpAt clUBWv">
        {data.filter(j=>j.Category===element.name).slice(0,4).map((element)=>{
      return <div className="sc-kgKVFY dvrVHl">
            <img src={`./image/${element.Item}.jpg`} alt={`${element.Item}`}/>
              <div className="sc-fLQRDB gkXfoc">
                <span className="sc-bALXmG gVmIFE">{element.Item}</span>
                <span className="sc-ivnCJf cXaOnw">{element.Price}</span>
                </div>
                <button className="sc-gLDzan sc-fsQiph jbMNP cDfQDd" onClick={()=>Check(element.Item,element.Price,"fd")}>Add to cart</button>
                </div>
        })}
                </div>
                <p></p>
                </>
      })}
                </div>
                
    </div>
  )
}
