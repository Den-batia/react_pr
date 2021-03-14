
import { connect } from 'react-redux';
import withScroll from '../hoc/WithScroll'

const mapStateToProps = () => {
    return {
        json_url: '/tech/',
        tag: 'Технологии'
    }
  }

export default connect(mapStateToProps, {})(withScroll())