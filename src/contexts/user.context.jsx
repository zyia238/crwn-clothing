import {useState, createContext , useReducer} from 'react'

export const UserContext = createContext()

const userReducer = (state, action) => {
    const {type,payload} = action
    switch(type){
        case 'CHANGE_CURRENT_USER':
            return {
                ...state,
                currentUser:payload
            }
        case 'SIGN_OUT':
            return {
                currentUser:null
            }
        default:
            throw new Error('no matched type found in reducer')
    }
}

const defaultState = {
    currentUser:null
}

const UserProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,defaultState)
    const user = {state,dispatch}
    return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProvider