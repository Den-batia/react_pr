import s from './TopComponent.module.css'
import DateComponent from '../date/Date'
import  MenuComponent from '../MenuComponent/MenuComponent'

const TopComponent = () => {
    return (
        <div className={s.navbar}>
            <a href="#home">Home</a>

            {/* <a href="#news">News</a>
                <a href="#contact">Contact</a> */}
            <MenuComponent />
        </div>

    )
}

export default TopComponent
