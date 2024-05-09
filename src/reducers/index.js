import { combineReducers } from "redux"
import * as actions from '../actions'
const dummyReducer = (state=false,action) =>{
    switch(action.type){
        case actions.DUMMY_ACTIONS:
            return true
        default:
            return false
    }

}
export default combineReducers({
    dummyReducer
})