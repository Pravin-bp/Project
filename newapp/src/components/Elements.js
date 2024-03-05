import React, { useState } from 'react'
import { list } from '../App'

export default function Elements() {
  return (
    <div>
        {list.map((element)=>{
       return <div class="sc-qRumB cGdzpe">
        <img src={`./image/${element.Item}.jpg`} alt={`${element.Item}`} />
            <div class="sc-jsMahE fYMCJj">
                <span>{element.Item}</span>
                <span>{element.qty} x {element.Price}</span>
                </div>
                </div>
        })}
    </div>
  )
}
