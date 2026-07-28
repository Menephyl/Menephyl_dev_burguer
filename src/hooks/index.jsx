// esse index dos hooks serve para juntar todos os contextos criados. 


import { UserProvider } from "./UserContext";
const AppProvider = ({ children }) => {
    return (
        <UserProvider>{children}</UserProvider>

    )

}

export default AppProvider;