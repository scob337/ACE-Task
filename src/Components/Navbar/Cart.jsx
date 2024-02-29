import React from 'react'
import Style from '../../Styles/Cart.module.css'
 import CART_ITEMS from '../Navbar/Cart_Items'
export default function Cart({Hover , HandleHover , HandleLeave}) {

  return (
    <ul onMouseLeave={()=> HandleLeave()} onMouseEnter={()=> HandleHover()} className={Style.List_Container} style={{display:Hover? "flex": "none"}}>
    
   <CART_ITEMS/> 

    </ul>
  )
}
