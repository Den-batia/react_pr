import React from "react"
import { NavLink } from "react-router-dom"
import DateComponent from "../date/Date"
import WithPropsPaginator from "../Paginator/Paginator"
import s from './FirstComponent.module.css'


const FirstComponent = (props) => {
  return <div>
    <DateComponent />
    <div style = {{textAlign: "center"}}>
        <NavLink className={s.login} to="/login">Login</NavLink>
    </div>

    <div>
      <WithPropsPaginator/>
    </div>
  </div>
}

export default FirstComponent