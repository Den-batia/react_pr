import React, { useEffect, useState } from 'react'
import s from './StyledMenuComponent.module.css'
import { NavLink } from 'react-router-dom'

const StyledMenuComponent = (props) => {

    const [nav_style, setNav_style] = useState({backgroundColor:"green", zIndex: 1, flexDirection: "column", float: "right", width: "auto", height: '500px', opacity: ".5", 
    transition: "transform .2s ease 0s", transform: "translateX(100%)"});

    useEffect(() => {
        setNav_style({...nav_style, transform: "translateX(0)"})
    }, [nav_style])

    return(
        <div >
            <nav style = {nav_style}>
                <ul style = {{padding:0}}>
                    <li><NavLink className = {s.a} to={'people'} onClick={props.assd}>Люди</NavLink></li>
                    <li><NavLink className = {s.a} to={'auto'}  onClick={props.assd}>Авто</NavLink></li>
                    <li><NavLink className = {s.a} to={'realt'} onClick={props.assd}>Недвижимость</NavLink></li>
                    <li><NavLink className = {s.a} to={'tech'}  onClick={props.assd}>Технологии</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default StyledMenuComponent