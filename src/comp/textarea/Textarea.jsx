import s from './Textarea.module.css'

let Textarea = (props) => {

    return (
        <div className={s.a} onClick={() => props.dellElement()}>
                    <img src={props.src} alt="лайк"></img>
                 </div>  
    )
}

export default Textarea