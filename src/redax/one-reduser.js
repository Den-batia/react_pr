import { stopSubmit } from "redux-form"
import { api } from '../api/api'


const actionsTypes = {
    dellElement: 'DELL-ELEMENT',
    chanjeAny: 'CHANGE-ANY',
    touh_Gam_menu: 'TOUCH_GAM',
    is_loadingInitData: 'IS-LOAD-INIT-DATA',
    update_dataNews: 'UPDATE-DATA-NEWS',
    cancel_array: 'DE-ARR',
    update_tag: 'UPDATE-TAG'
}

export const dellElement = () => ({type: actionsTypes.dellElement})
export const updateTag = (tag) => ({type: actionsTypes.update_tag, tag})

export const login = ({text, text2}) =>{
    return dispatch => {
        (text2 === text) && dispatch(stopSubmit("login", {_error:"Нельзя вводить одинаковые поля!!!!"}))
    }
}
export const touhGamMenuAction = (touh_g) => ({type: actionsTypes.touh_Gam_menu, touh_g})

const is_loadinInitData = () => ({type: actionsTypes.is_loadingInitData})
const updateDataNews = (data) => ({type: actionsTypes.update_dataNews, data})

export const loadNextNewsThunk = (url) => {
    return async dispatch => {
        let a = await api.getNextNews(url)
        dispatch(updateDataNews(a.data))

    }
}

export const loadInitDataThunk = (url) => {
    return async dispatch => {
        let a = await api.getNextNews(url)
        dispatch(updateDataNews(a.data))
        dispatch(is_loadinInitData())
    }
}

export const null_array = () => {
    return {type: actionsTypes.cancel_array}
} 


const init = {
    array:[],
    is_loadinInitData: true, 
    countElementsOnPage: 20,
    counElementInOneElementPaginator: 1,
    touh_Gam_menu: false,
    num_load: 0,
    tag: '',
}

export const oneReduser = (state = init, action) => {
    switch (action.type) {
        case actionsTypes.touh_Gam_menu: {
            return {
                ...state,
                touh_Gam_menu: action.touh_g
            }
        }
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
        case actionsTypes.is_loadingInitData: {
            return{
                ...state,
                is_loadinInitData: false,
                num_load: 1
            }
        }
        case actionsTypes.update_dataNews:{
            return{
                ...state,
                array: state.array.concat(action.data),
                num_load: state.num_load += 1
            }
        }

        case actionsTypes.cancel_array:{
            return{
                ...state,
                array:[],
                is_loadinInitData: true,
                num_load: 0
            }
        }

        case actionsTypes.update_tag:{
            return{
                ...state,
                tag: action.tag
            }
        }
        
        default:
            return state
    }

}