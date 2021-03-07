import { stopSubmit } from "redux-form"
import actions from "redux-form/lib/actions"
import { api } from '../api/api'


const actionsTypes = {
    dellElement: 'DELL-ELEMENT',
    chanjeAny: 'CHANGE-ANY',
    touh_Gam_menu: 'TOUCH_GAM',
    is_loadNewsData: 'IS-LOAD-NEWS-DATA',
    update_dataNews: 'UPDATE-DATA-NEWS'
}

export const dellElement = () => ({type: actionsTypes.dellElement})

export const login = ({text, text2}) =>{
    return dispatch => {
        (text2 === text) && dispatch(stopSubmit("login", {_error:"Нельзя вводить одинаковые поля!!!!"}))
    }
}
export const touhGamMenuAction = (touh_g) => ({type: actionsTypes.touh_Gam_menu, touh_g})

const is_loadinDataAction = (is_load) => ({type: actionsTypes.is_loadNewsData, is_load})
const updateDataNews = (data) => ({type: actionsTypes.update_dataNews, data})

// export const asdThunk = (propsFromComponent) => {
//     return dispatch => {
//         axios.get()
//         dispatch('action')
//     }
// }
export const loadNextNewsThunk = () => {
    return async dispatch => {
        // dispatch(is_loadinDataAction(true))
        let a = await api.getNextNews()
        dispatch(updateDataNews(a.data))
        // dispatch(is_loadinDataAction(false))

    }
} 


const init = {
    array: [{'news_img_link': "https://content.onliner.by/news/550x298/118c7d8800558a0660f2d02c15517019.jpeg"}, {'news_img_link': "https://content.onliner.by/news/550x298/118c7d8800558a0660f2d02c15517019.jpeg"}, 
            {'news_img_link': "https://content.onliner.by/news/550x298/118c7d8800558a0660f2d02c15517019.jpeg"}, {'news_img_link': "https://content.onliner.by/news/550x298/118c7d8800558a0660f2d02c15517019.jpeg"}, ],
    is_loadinData: false,
    countElementsOnPage: 20,
    counElementInOneElementPaginator: 1,
    touh_Gam_menu: false
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
        case actionsTypes.is_loadNewsData: {
            return{
                ...state,
                is_loadinData: action.is_load
            }
        }
        case actionsTypes.update_dataNews:{
            return{
                ...state,
                array: state.array.concat(action.data)
            }
        }
        
        default:
            return state
    }

}