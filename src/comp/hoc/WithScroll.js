import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import Textarea from '../textarea/Textarea'
import { loadNextNewsThunk, loadInitDataThunk, updateTag } from '../../redax/one-reduser' 

const withScroll = () => {


    const mapStateToProps = (state) => {
        return{
            array: state.one.array,
            is_loadinInitData: state.one.is_loadinInitData,
            num_load: state.one.num_load,
        }
    }

    class ScrollComponent extends React.Component{

        fetchMoreData = ()=> {
            const _url = this.props.json_url + '?from=' + this.props.num_load * 5 + '&too=' + (this.props.num_load * 5 + 5)
            this.props.loadNextNewsThunk(_url)
        }

        componentDidMount(){
            this.props.loadInitDataThunk(this.props.json_url)
        }

        componentDidUpdate(prevprops){
            if(this.props.array.length===0){
                this.props.loadInitDataThunk(this.props.json_url)
            }
            this.props.tag !== prevprops.tag || this.props.updateTag(this.props.tag)
        }

        render(){
            return (
                <>
                {this.props.is_loadinInitData && <div>init</div>}

                {this.props.is_loadinInitData || 
                    <InfiniteScroll
                        dataLength={this.props.array.length}
                        next={this.fetchMoreData}
                        hasMore={true}>
                        {/* loader={<h4>Loading...</h4>}> */}
                            {this.props.array.map((i, index) => (<Textarea key={index} data={i}/>))}
                    </InfiniteScroll>
                }
                </>)
        }
    }
    return connect(mapStateToProps, {loadNextNewsThunk, loadInitDataThunk, updateTag})(ScrollComponent)
}

export default withScroll