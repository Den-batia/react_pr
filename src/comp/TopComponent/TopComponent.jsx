import s from './TopComponent.module.css'
import DateComponent from '../date/Date'
import  MenuComponent from '../MenuComponent/MenuComponent'

const TopComponent = () => {
    return (
        <div className={s.navbar}>
            <MenuComponent />
            <DateComponent/>

        </div>

    )
}

export default TopComponent
