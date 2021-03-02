import React from 'react'
import s from './StyledMenuComponent.module.css'
import { NavLink } from 'react-router-dom'
import GambComponent from '../GambComponent/GambComponent'

const StyledMenuComponent = (props) => {

    return(
        
        <div className = {s.nav}>
            <div style={{position:'absolute',  width: '0px'}}><GambComponent {...props}/></div>
            <div className = {s.dd}>
                <ul className={s.aaa}>
                    
                    <li><NavLink className = {s.a} to={'people'} onClick={props.assd}>Люди</NavLink></li>
                    <li><NavLink className = {s.a} to={'auto'}  onClick={props.assd}>Авто</NavLink></li>
                    <li><NavLink className = {s.a} to={'realt'} onClick={props.assd}>Недвижимость</NavLink></li>
                    <li><NavLink className = {s.a} to={'tech'}  onClick={props.assd}>Технологии</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default StyledMenuComponent