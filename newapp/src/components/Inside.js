import React, { useState } from 'react'
import './css/home.css'
import sand from './img/sandwich.jpg'
import lassi from './img/lassi.jpg'
import freshjuice from './img/freshJuice.jpg'
import fruitshake from './img/fruitshake.jpg'
import milkshakes from './img/milkshakes.jpg'
import icecream from './img/icecream.jpg'
import noodles from './img/noodles.jpg'
import sidedish from './img/sidedish.jpg'
import shawarma from './img/shawarma.jpg'
import barbeque from './img/barbeque.jpg'
import falooda from './img/falooda.jpg'
import mojito from './img/mojito.jpg'
import { Link } from 'react-router-dom'



export const articles=[
  {name:"Sandwich",
  background: sand
  },
  {name:"Fresh Juice",
  background: freshjuice
  },
  {name:"Fruit Shake",
  background: fruitshake
  },
  {name:"Milk Shake",
  background: milkshakes
  },
  {name:"Mojito",
  background: mojito
  },
  {name:"Chineese",
  background: noodles
  },
  {name:"Barbeque",
  background: barbeque
  },
  {name:"Side Dish",
  background: sidedish
  },
  {name:"Shawarma",
  background: shawarma
  },
  {name:"Ice Cream",
  background: icecream
  },
  {name:"Lassi",
  background: lassi
  },
  {name:"Falooda",
  background: falooda
  }
]

export default function Inside() {
 
    
  return (
    <>
    <div className="sc-hLseeU jgTRRx">
    {articles.map((element)=>{ 
     return <Link className="sc-dmqHEX gwLTjm"  key={element.name} to={`/${element.name}`}>
    <div className="sc-beqWaB fYXwFS"   style={{backgroundImage: `url(${element.background})`}}></div>
    <div className="sc-gueYoa dXxpzs" >
      <h2>{element.name}</h2>
      <p>Shop Now</p>
      </div>
      </Link>
    })}
   </div>
   </>
  )
  
}
