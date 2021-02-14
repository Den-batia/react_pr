import {useState} from 'react'
import s from './Paginator.module.css'
import TextareaContainer from '../textarea/TextareaContainer'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const Paginator = ({array, countElementsOnPage, counElementInOneElementPaginator}) => {

    const countPage = Math.ceil(array.length / countElementsOnPage)
    const countelementsPaginator = Math.ceil(countPage / counElementInOneElementPaginator)
    const [elementsPaginator, setElementsPaginator] = useState(1)

    if(countelementsPaginator < elementsPaginator){
        setElementsPaginator(elementsPaginator - 1)
    }
    const leftElement = counElementInOneElementPaginator * (elementsPaginator - 1) + 1
    const rightElement = leftElement * countElementsOnPage > array.length ? leftElement : counElementInOneElementPaginator * elementsPaginator
    
    const pagList = []
    for(var i = leftElement; (i <= rightElement); i++){pagList.push(i)}

    return <div>
        <div className = {s.grid}>
            {array.slice(0, countElementsOnPage).map((el, id) => <TextareaContainer key={id}/>)}
        </div>
        <div className = {s.pags}>
            {elementsPaginator > 1 && <button onClick = {() => setElementsPaginator(elementsPaginator -1)}>назад</button>}
            {array.length > 0 && pagList.map((el, id) => <NavLink className = {s.pag} key={id} to = {`/${el}`}> {el} </NavLink>)}
            {elementsPaginator < countelementsPaginator && <button onClick = {() => setElementsPaginator(elementsPaginator + 1)}>вперед</button>}
        </div>
       
    </div>
}

let mapStateToProps = (state) => {
    return {
        array: state.one.array,
        countElementsOnPage: state.one.countElementsOnPage,
        counElementInOneElementPaginator: state.one.counElementInOneElementPaginator
    }
}

let WithPropsPaginator = connect(mapStateToProps, {})(Paginator)
export default WithPropsPaginator

