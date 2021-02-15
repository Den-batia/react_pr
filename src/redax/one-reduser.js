import { stopSubmit } from "redux-form"


const actionsTypes = {
    dellElement: 'DELL-ELEMENT',
    chanjeAny: 'CHANGE-ANY'
}

export const dellElement = () => ({type: actionsTypes.dellElement})

export const login = ({text, text2}) =>{
    return dispatch => {
        (text2 === text) && dispatch(stopSubmit("login", {_error:"Нельзя вводить одинаковые поля!!!!"}))
    }
} 

// export const asdThunk = (propsFromComponent) => {
//     return dispatch => {
//         axios.get()
//         dispatch('action')
//     }
// }


const init = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    asd: 'asd',
    src: 'https://sun9-10.userapi.com/impf/c840425/v840425151/26b12/waIg4Znt2Ug.jpg?size=200x0&quality=90&crop=0,0,512,512&sign=00b777bffa8aae15019d18f2e021bb3e&ava=1',
    any_any: 0,
    countElementsOnPage: 10,
    counElementInOneElementPaginator: 1
}

export const oneReduser = (state = init, action) => {
    switch (action.type) {
        case actionsTypes.dellElement: {
            state.array.pop()
            return {
                ...state,
                array: [...state.array],
            }
        }
        case actionsTypes.chanjeAny: {
            return{
                ...state,
                any_any: state.any_any += 1
            }
        }
        
        default:
            return state
    }

}