
import { connect } from 'react-redux';
import { loadNextNewsThunk, loadInitDataThunk } from '../../redax/one-reduser'
import withScroll from '../hoc/WithScroll'

const mapStateToProps = (state) => {
    return {
        json_url: '/people/',
        array: state.one.array,
        is_loadinInitData: state.one.is_loadinInitData
    }
  }

export default connect(mapStateToProps, {loadNextNewsThunk, loadInitDataThunk})(withScroll())