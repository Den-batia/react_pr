import React from 'react'
import {connect} from 'react-redux'
import MainComponent from './comp/MainConponent/MainComponent';
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
        <MainComponent/>
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