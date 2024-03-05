import React, { useState } from 'react'
import './css/home.css'
import {ReactComponent as Home} from './svg/home.svg'
import {ReactComponent as Art} from './svg/cart.svg'
import {Link} from 'react-router-dom';
import Cart from './Cart';

export default function Nvbar({Use}) {

  let [c,d]=useState(0)
  const toggle=()=>
  {
    if(c===0)
    {
    d(1)
    }
    else{
      d(0)
    }
  }
  
  return ( 
    <>
  <div className="sc-fbJfA fmEBZo" style={{backgroundColor:"deepskyblue"}}>
  
  <Link className="sc-brKeYL fgGMqX"  to="/">
  <Home/>
  <div className="gbn" style={{"color":'black'}}><h4><i>foodsafari</i></h4>
  </div>
  </Link>
  <div className="sc-ktEKTO jBYPZs">
  
    <Link className="sc-hAtEyd bSWXjj"  style={{"paddingLeft": 30}}
to="shop">SHOP</Link>
    <a className="sc-hAtEyd bSWXjj" style={{"paddingLeft": 0,"paddingRight":20}} href="/auth">SIGN IN</a>
     <div className="sc-eDDNvR epGZiQ" onClick={toggle}>
     <Art/>
      <span className="sc-jTrPJq cgZmbv" >{Use}</span>
      </div>
      {c===1?<Cart Cou={Use}/>:<p/>}
      </div>
  </div>
  
  </>
  )
 
}
