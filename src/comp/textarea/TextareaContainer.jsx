import { connect } from 'react-redux'
import {dellElement} from '../../redax/one-reduser'
import Textarea from './Textarea.jsx'


let mapStateToProps = (state) => {
    
    return {
        src:state.one.src,
    }
}
let TextareaContainer = connect(mapStateToProps, {dellElement})(Textarea);

export default TextareaContainer