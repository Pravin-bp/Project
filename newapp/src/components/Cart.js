import React from 'react'
import Elements from './Elements'
import { Link } from 'react-router-dom'

export default function Cart({Cou}) {
  return (
    <div>
      <div className="sc-kFuwaP gSlDUV">
        <div className="sc-csCMJt ixchdn">
          {Cou===0?<span className="sc-irTswW jplYCh">Your cart is empty</span>:<Elements/>}
            </div>
            <Link to="/order" className="sc-gLDzan jbMNPU">ORDER
            </Link>
            </div>
    </div>
  )
}
