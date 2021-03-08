import s from './Textarea.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from "react-router-dom"
let Textarea = (props) => {
    return (

        <div className={s.a} onClick={() => props.dellElement()}>
            <div className={s.text}>{props.data.news_text}</div>
            <NavLink to={props.data.news_img_link}>
                 <LazyLoadImage className={s.img}
                            src={props.data.news_img_link}
                            alt={'ddddd'}>
                </LazyLoadImage>
            </NavLink>
            <div className={s.like}></div>
            <div className={s.dislike}></div>
            {/* {props.data.news_tag && <div>{props.data.news_tag.tag_name}</div>} */}
           
        </div>
    )
}

export default Textarea