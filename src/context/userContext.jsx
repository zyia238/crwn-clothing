import {useState, createContext} from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState()
    const user = {currentUser,setCurrentUser}
    return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProvider