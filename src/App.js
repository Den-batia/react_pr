import React from 'react'
import { Route } from 'react-router-dom';
import FirstComponent from "./comp/FirstComponent/FirstComponent"
import Login from "./comp/Login/Login"
import {connect} from 'react-redux'
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
    if (this.state.isTimeEnded) {
      return <div >
        
        <Route exact component={FirstComponent} path="/" />
        <Route component={Login} path="/login" />
      </div>
    }
    return <div>
      ждем....
    </div>
    
  }

}

let mapStateToProps = (state) => {
  return {
      any: state.one.any_any
      
  }
}
export default connect(mapStateToProps, null)(App);