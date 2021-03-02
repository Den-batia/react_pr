import React from 'react'
import {connect} from 'react-redux'
import MainComponent from './comp/MainConponent/MainComponent';
import TopComponent from './comp/TopComponent/TopComponent';
import {touhGamMenuAction} from './redax/one-reduser'
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
      <div>
        <TopComponent {...this.props}/>
        <div style={this.props.touh_Gam_menu ? {marginTop:"53px",  opacity:'0.5'} : {marginTop:"53px"}}>
          {this.state.isTimeEnded && <div ><MainComponent/></div>} 
          {this.state.isTimeEnded || <div style={{marginTop:"53px"}}>ждем...</div>}
        </div>
        
        
        
        
      </div>
    )
    
  }
}

let mapStateToProps = (state) => {
  return {
      any: state.one.any_any,
      touh_Gam_menu: state.one.touh_Gam_menu
  }
}

export default connect(mapStateToProps, {touhGamMenuAction})(App);