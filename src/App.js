import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import MainComponent from './comp/MainConponent/MainComponent';
import TopComponent from './comp/TopComponent/TopComponent';
import { touhGamMenuAction, loadInitDataThunk } from './redax/one-reduser'

class App extends React.Component{

  componentDidMount(){
    // this.props.loadInitDataThunk()
  }
// asd = async ()=> {
//   let a =  new Promise((res, rej) => {setTimeout(()=>{res()}, 1000)})
//   await a
//   this.setState({isTimeEnded:true})
// }
    render(){
      return (
      <div>
        <TopComponent {...this.props}/>
        {this.props.is_loadinInitData && <div style={{marginTop:'53px'}}>init</div>}
        {this.props.is_loadinInitData || 
        <>
          <div style={this.props.touh_Gam_menu ? {opacity:'0.5'} : {overflow:'hidden'}}>
            <MainComponent/>
          </div>
        </>
        }
      </div>
    )
    }
    
}

let mapStateToProps = (state) => {
  return {

      is_loadinInitData: state.one.is_loadinInitData,
      touh_Gam_menu: state.one.touh_Gam_menu
  }
}

export default connect(mapStateToProps, {touhGamMenuAction, loadInitDataThunk})(App);