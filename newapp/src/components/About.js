import React from 'react'
import Elements from './Elements'
import { Link } from 'react-router-dom'
import {ReactComponent as Home} from './svg/home.svg'

export default function About() {
  return (
    <>
    <hr style={{"opacity":.90}}></hr>
    <div class="_3zqGM">
        <div class="_26WmF">
        
        <Home/>
        <div className="gbn" style={{"color":'black'}}><h4><i>foodsafari</i></h4>
  </div>
    
        </div>
        <div class="_2BWW_">
            © 2023 fs</div>
            <div class="_2-f1I">
                <h5><a href="http://localhost:3000/v1/jim/create_ticket" style={{color:"white"}}>Raise Issue</a></h5>
                <a class="_1Az3W" href="https://www.facebook.com/swiggy.in" rel="nofollow noopener" alt="facebook" target="_blank">
                    <img class="" width="24" height="24" alt="" src="./image/facebook.jpg"/>
                    </a>
                    <a class="_1Az3W" href="https://pinterest.com/swiggyindia" rel="nofollow noopener" alt="pintrest" target="_blank">
                        <img class="" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"/>
                        </a><a class="_1Az3W" href="https://instagram.com/tn49.food_safari?igshid=MzRlODBiNWFlZA==" rel="nofollow noopener" alt="instagram" target="_blank">
                            <img class="" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"/>
                            </a><a  class="_1Az3W" href="https://twitter.com/swiggy" rel="nofollow noopener" alt="twitter" target="_blank">
                                <img class="" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"/></a></div>
        </div>
        </>
    
  )
}
