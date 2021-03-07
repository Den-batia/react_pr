import s from './Textarea.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

let Textarea = (props) => {
    return (

        <div className={s.a} onClick={() => props.dellElement()}>
            <div className={s.img}>
                <LazyLoadImage  src={props.data.news_img_link}
                                alt={'hhhhhhhhhhhhhh'}
                                width='100%'
                                height={230}
                                            >
                                
                </LazyLoadImage>
            </div>
            
            {/* <img src={props.data.news_img_link}></img> */}
            
        </div>
    )
}

export default Textarea