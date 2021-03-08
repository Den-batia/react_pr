import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Textarea from '../textarea/Textarea'

const withScroll = () => {

    class ScrollComponent extends React.Component{

        fetchMoreData = ()=> {
            this.props.loadNextNewsThunk(this.props.json_url)
        }

        componentDidMount(){
            this.props.loadInitDataThunk(this.props.json_url)
        }
        render(){
            return (
                <>
                {this.props.is_loadinInitData && <div>init</div>}

                {this.props.is_loadinInitData || 
                    <InfiniteScroll
                        dataLength={this.props.array.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}>
                            {this.props.array.map((i, index) => (<Textarea key={index} data={i}/>))}
                    </InfiniteScroll>
                }
                </>)
        }
    }
    return ScrollComponent
}

export default withScroll