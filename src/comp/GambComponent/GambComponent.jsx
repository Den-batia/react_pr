import s from './GambComponent.module.css'

const GambComponent = (props) => {
    return (
        <div className={s.asd}>
            <button className={s.b} onClick={props.assd}>
                <div className={s.div} />
                <div className={s.div} />
                <div className={s.div} />
            </button>
        </div> 
    )
}

export default GambComponent