import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Textarea from '../textarea/Textarea'

const withScroll = () => {

    const ScrollComponent = (props) => {

        useEffect(()=>{
            props.loadInitDataThunk(props.json_url)
        }, [])

        const fetchMoreData = ()=> {
            props.loadNextNewsThunk(props.json_url)
        }

        return (
            <>
            {props.is_loadinInitData && <div style={{marginTop:'53px'}}>init</div>}

            {props.is_loadinInitData || 
                <InfiniteScroll
                    dataLength={props.array.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                        {props.array.map((i, index) => (<Textarea key={index} data={i}/>))}
                </InfiniteScroll>
            }
            </>
            
        )
    
    }
    return ScrollComponent
}

export default withScroll