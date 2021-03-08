import React from 'react'
import s from './StyledMenuComponent.module.css'
import { NavLink } from 'react-router-dom'
import GambComponent from '../GambComponent/GambComponent'

const StyledMenuComponent = (props) => {

    const del_array = () => {
        props.assd()
        props.array_n()

    }

    return(
        
        <div className = {s.nav}>
            <div style={{position:'absolute',  width: '0px'}}><GambComponent {...props}/></div>
            <div className = {s.dd}>
                <ul className={s.aaa}>
                    
                    <li><NavLink className = {s.a} to={'people'} onClick={del_array}>Люди</NavLink></li>
                    <li><NavLink className = {s.a} to={'auto'}  onClick={del_array}>Авто</NavLink></li>
                    <li><NavLink className = {s.a} to={'realt'} onClick={del_array}>Недвижимость</NavLink></li>
                    <li><NavLink className = {s.a} to={'tech'}  onClick={del_array}>Технологии</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default StyledMenuComponent