import React from 'react'
import { list } from '../App'
import { Link } from 'react-router-dom'


export default function Order({Check}) {
  
  let y=0
  let pay=()=>
  {
    alert("amount paid")
  }
  return (
     <div>
        <div class="sc-cjERFW eglKvN">
    <div class="sc-jegxcv gZIwrU">
    <div class="sc-cbelXg gNgeZb">
    <span>Product</span>
    </div>
    <div class="sc-cbelXg gNgeZb">
    <span>Description</span>
    </div>
    <div class="sc-cbelXg gNgeZb">
    <span>Quantity</span>
    </div>
    <div class="sc-cbelXg gNgeZb">
    <span>Price</span>
    </div>
    <div class="sc-cbelXg gNgeZb">
    <span>Remove</span>
    </div></div>
    {list.map((element)=>{ 
      y=y+(element.Price*element.qty)
    return (<div class="sc-bZPPFW bmUiRd">
    <div class="sc-kMrHXl brUtOr">
    <img src={`./image/${element.Item}.jpg`} alt={`${element.Item}`}/>
    </div>
    <span class="sc-ilEZps bxmebP">{element.Item}</span>
    <span class="sc-ilEZps sc-jItqcz bxmebP dxinJO">
    <div class="sc-hhGHuG lkgVIY" onClick={()=>Check(element.Item,element.Price,"bk")}>❮</div>
    <span class="sc-gXSCqU eCTQBU">{element.qty}</span>
    <div class="sc-hhGHuG lkgVIY" onClick={()=>Check(element.Item,element.Price,"fd")}>❯</div>
    </span>
    <span class="sc-ilEZps bxmebP">{element.Price}</span>
    <div class="sc-cCYyox lndYdR" onClick={()=>Check(element.Item,element.Price,element.qty)}>✕</div></div>)
  
    })}
    <span class="sc-iVFRtF hSyAhr">Total: ${y}</span>
    <p></p>
    <button type="button" onClick={pay} class="sc-gLDzan sc-iAEyYk jbMNPU cGlpjr">Pay </button>
    </div>
    </div>

  )
}
