import { stopSubmit } from "redux-form"
import actions from "redux-form/lib/actions"
import { api } from '../api/api'


const actionsTypes = {
    dellElement: 'DELL-ELEMENT',
    chanjeAny: 'CHANGE-ANY',
    touh_Gam_menu: 'TOUCH_GAM',
    is_loadingInitData: 'IS-LOAD-INIT-DATA',
    update_dataNews: 'UPDATE-DATA-NEWS'
}

export const dellElement = () => ({type: actionsTypes.dellElement})

export const login = ({text, text2}) =>{
    return dispatch => {
        (text2 === text) && dispatch(stopSubmit("login", {_error:"Нельзя вводить одинаковые поля!!!!"}))
    }
}
export const touhGamMenuAction = (touh_g) => ({type: actionsTypes.touh_Gam_menu, touh_g})

const is_loadinInitData = () => ({type: actionsTypes.is_loadingInitData})
const updateDataNews = (data) => ({type: actionsTypes.update_dataNews, data})

export const loadNextNewsThunk = () => {
    return async dispatch => {
        let a = await api.getNextNews()
        dispatch(updateDataNews(a.data))

    }
}
export const loadInitDataThunk = () => {
    return async dispatch => {
        let a = await api.getNextNews()
        dispatch(updateDataNews(a.data))
        dispatch(is_loadinInitData())
    }
}


const init = {
    array: [{news_img_link: "https://content.onliner.by/news/550x298/118c7d8800558a0660f2d02c15517019.jpeg", news_text: "Ответ бизнес-союза Министерству по налогам и сбора…ед тем как бороться, нужно разобраться в причинах"},
            {news_img_link: "https://content.onliner.by/news/550x298/7efc2e53f435989045cfd6b1cdd0d952.jpeg", news_text: "Праздники будут зимними. Но дальше виднеется весна"},
            {news_img_link: "https://content.onliner.by/news/550x298/5ea12e98e757896f165225b60522c205.jpeg", news_text: "МАРТ в формате «5 причин» ответил на претензии ЕЭК…ательного перечня белорусских товаров в магазинах"},
            {news_img_link: "https://content.onliner.by/news/550x298/e3ced6459526b38fd70f5ba41c3a13ba.jpeg", news_text: "Украина вернула Беларусь в зеленый список по COVID-19. Теперь при въезде не нужны тест и изоляция"},
            {news_img_link: "https://content.onliner.by/news/550x298/9a345825fa21b54acb8a0fe3651e307e.jpeg", news_text: "В Банке развития сменили главу. Это один из самых молодых руководителей банков"}],
    
            
    is_loadinInitData: false, //***************************************************** */
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
        case actionsTypes.is_loadingInitData: {
            return{
                ...state,
                is_loadinInitData: false
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