import { connect } from 'react-redux';
import withScroll from '../hoc/WithScroll'

const mapStateToProps = () => {
    return {
        json_url: '/auto/',
        tag: 'Авто'
    }
  }

export default connect(mapStateToProps, {})(withScroll())