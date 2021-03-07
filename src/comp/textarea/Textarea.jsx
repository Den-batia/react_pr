import s from './Textarea.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

let Textarea = (props) => {
    return (

        <div className={s.a} onClick={() => props.dellElement()}>
            <div className={s.text}>{props.data.news_text}</div>
            <LazyLoadImage className={s.img}  src={props.data.news_img_link}
                        alt={'ddddd'}>
                                
            </LazyLoadImage>
        </div>
    )
}

export default Textarea