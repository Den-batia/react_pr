import s from './Textarea.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from "react-router-dom"
let Textarea = (props) => {

    const date = (milisec) => {
        const date = new Date(milisec * 1000)
        const current_day = new Date().getDay()
        let day = date.getDay()
        if (day === 6){
            day = -1
        }
        if (day === current_day){
            return 'Сегодня'
        }
        if (current_day === (day + 1)){
            return 'Вчера'
        }
        return date.toLocaleDateString()
    }

    return (

        <div className={s.area} onClick={() => props.dellElement()}>
            <div className = {s.date}>{date(props.data.post_date)}</div>
            <div className={s.text}>
                <a className={s.a} href={props.data.news_link}>{props.data.news_text}</a>
                
            </div>
            
            <LazyLoadImage className={s.img}
                src={props.data.news_img_link}
                alt={'ddddd'}>
            </LazyLoadImage>
            
            <div className = {s.comment}>{props.data.top_comment}</div>
            <div className={s.like}></div>
            <div className={s.dislike}></div>
        </div>
    )
}

export default Textarea