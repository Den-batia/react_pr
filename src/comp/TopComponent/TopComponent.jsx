
import s from './TopComponent.module.css'
import DateComponent from '../date/Date'
import MenuComponent from '../MenuComponent/MenuComponent'

const TopComponent = (props) => {
    return (
        <div className={s.navbar}>
            <DateComponent/>
            <div className={s.tag}>{props.tag}</div>
            <MenuComponent {...props}/>
        </div>
    )
}

export default TopComponent
