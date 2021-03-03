import s from './GambComponent.module.css'

const GambComponent = (props) => {

    const a = <><div className={s.div} /> <div className={s.div} /><div className={s.div} /></>
    const b = <div className={s.cli}></div>

    return (
        <div className={s.asd}>
            <button className={s.b} onClick={props.assd}>
                {props.is_open ? a : b}
            </button>
        </div> 
    )
}

export default GambComponent