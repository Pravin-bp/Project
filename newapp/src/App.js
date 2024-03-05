import './App.css';
import Inside from './components/Inside';
import Nvbar from './components/Nvbar';
import Shop from './components/Shop';
import Marquee from './components/Marquee';
import Item from './components/Item';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {articles} from './components/Inside';
import { useState } from 'react';
import Cart from './components/Cart';
import Sign from './components/Sign';
import Order from './components/Order';
import About from './components/About';
import Signup from './components/Signup';

export let list=[]
let li=[]
let c=1
let x=0
function App() {
 let [a,b]=useState(0)
 const check=(name,price,t)=>
 {
  if(t==="fd")
  {
  b(a+1)
  
  list.forEach(element => {
   if(element.Item===name)
   {
    element.qty=element.qty+1
    x=1
   }
  })
  list.push({"Item":name,"Price":price,"qty":c})
  if(x===1)
  {
    list.pop()
    x=0
  }
}
else if(t==="bk")
{
    b(a-1)
  
  list.forEach(element => {
   if(element.Item===name)
   {
    element.qty=element.qty-1
    x=1
    if(element.qty==0)
    {
      list.splice(list.indexOf(element),1)
    }
   }
  })
  list.push({"Item":name,"Price":price,"qty":c})
  if(x===1)
  {
    list.pop()
    x=0
  }
  
}
else{
  b(a-t)
  list.forEach(element => {
    if(element.Item===name)
    {
    //delete list[list.findIndex(element)]
    list.splice(list.indexOf(element),1)
    console.log(list)
    }
   })
}
} 

   
 
  return (
    <>
    <Router>
    <Nvbar Use={a}></Nvbar>
    <Marquee/>
      <Routes>
      <Route exact path="/shop"
        element={<Shop List={list} Check={check}/>}>
      </Route>
      <Route  path="/"
      element={<Inside/>}>
      </Route>
      <Route  path="/auth"
      element={<Sign/>}>
      </Route>
      <Route  path="/cart"
      element={<Cart/>}>
      </Route>
      <Route  path="/signup"
      element={<Signup/>}>
      </Route>
      <Route  path="/order"
      element={<Order Check={check}/>}>
      </Route>
      {articles.map((element)=>{
      return <Route  path={`/${element.name}`}
      key={element.name} element={<Item List={list} Name={element.name} Check={check}/>}>
      </Route>
      })}
    </Routes>
    <About></About>
    </Router>
    </>
  );
}

export default App;
