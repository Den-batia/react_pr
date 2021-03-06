import react from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from 'react-redux';
import s from './ContentComonent.module.css'
import { loadNextNewsThunk } from '../../redax/one-reduser'
import Textarea from '../textarea/Textarea';

class ContentComonent extends react.Component{

    fetchMoreData = ()=> {
        this.props.loadNextNewsThunk()
    }

    componentDidMount = ()=>{
        this.props.loadNextNewsThunk()
    }

    render(){
        return(
            <>
                <InfiniteScroll
                    dataLength={this.props.array.length+1}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                        {this.props.array.map((i, index) => (<Textarea/>))}
                </InfiniteScroll>
                <button onClick={()=>{this.props.loadNextNewsThunk()}}>aaaaaaaaaaaaaaaaa</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        array: state.one.array,
        is_loadinData: state.one.is_loadinData
    }
  }

export default connect(mapStateToProps, {loadNextNewsThunk})(ContentComonent)