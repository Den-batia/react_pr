import React from 'react'
import {connect} from 'react-redux'
import MainComponent from './comp/MainConponent/MainComponent';
import StyledMenuComponent from './comp/StyledMenuComponent/StyledMenuComponent';
import TopComponent from './comp/TopComponent/TopComponent';
// import store from './redax/m_redux';

class App extends React.Component {
  state ={
    isTimeEnded: false
  }
asd = async ()=> {
  let a =  new Promise((res, rej) => {setTimeout(()=>{res()}, 1000)})
  await a
  this.setState({isTimeEnded:true})
}
  componentDidMount = ()=>{
    // setInterval(() => {
    //   store.dispatch({type:'CHANGE-ANY'})
    // }, 1000);
    this.asd()
  }
  render() {
    
    
    return (
      <div >
        <TopComponent />
        {this.state.isTimeEnded && <div style={{marginTop:"53px"}}><MainComponent /></div>} 
        {this.state.isTimeEnded || <div style={{marginTop:"53px"}}>ждем...</div>}
        
        
      </div>
    )
    
  }
}

let mapStateToProps = (state) => {
  return {
      any: state.one.any_any
  }
}
export default connect(mapStateToProps, null)(App);