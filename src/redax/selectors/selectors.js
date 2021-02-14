import { createSelector } from 'reselect'

export const getAny = (state) =>{
    return state.one.ads
}

const getAnySupper = createSelector([], () => {
    return
})