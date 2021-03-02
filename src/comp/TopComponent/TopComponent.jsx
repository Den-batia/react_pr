
import s from './TopComponent.module.css'
import DateComponent from '../date/Date'
import MenuComponent from '../MenuComponent/MenuComponent'

const TopComponent = (props) => {
    return (
        <div className={s.navbar}>
            <DateComponent/>
            <MenuComponent {...props}/>
        </div>
    )
}

export default TopComponent
