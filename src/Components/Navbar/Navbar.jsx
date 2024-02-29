    import React, { useState } from 'react'
    import Logo from '../../logo.jpg'
    import Style from '../../Styles/Nav.module.css'
import Cart from './Cart'
import { useSelector } from 'react-redux'
    export default function Navbar() {

            const Cart_Lenght = useSelector(state => state.Cart)
        const [Hover , setHover] = useState(false)
        const HandleHover = ()=>{
            setHover(true)
        }
        const HandleHoverLeave = ()=>{
            setHover(false)
        }
    return (
        <nav>
        <article className={`${Style.container} + container`}>
            <article className={`${Style.Logo} + Logo`}>

                <img src={Logo} alt='Nav Logo'/>
            </article>
            <ul className={Style.links}>
            <li>Home</li>
            </ul>
            <article className={Style.card}>
            <i onMouseLeave={()=> HandleHoverLeave()} onMouseEnter={()=> HandleHover()} className={`${Style.Icon} + fa-solid fa-cart-shopping Shop-bag`}><span>{Cart_Lenght?.length}</span></i>
                    
                <Cart Hover={Hover} HandleHover={HandleHover} HandleLeave ={ HandleHoverLeave}/>
                
            </article>  
        </article>
        </nav>
    )
    }
