import { SET_POKEMON } from '../types'

export default (state=[], action) => {
    switch (action.type) {
        default: return state
        case SET_POKEMON: return action.pokemon
    }
} 


