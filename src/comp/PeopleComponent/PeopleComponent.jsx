
import { connect } from 'react-redux';
import withScroll from '../hoc/WithScroll'

const mapStateToProps = () => {
    return {
        json_url: '/people/',
        tag: 'Люди'
    }
  }

export default connect(mapStateToProps, {})(withScroll())