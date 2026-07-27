// esse index dos hooks serve para juntar todos os contextos criados. 


import { UserProvider } from "./UserContext";
const AppProvider = ({ Children }) => {
    return (
        <UserProvider>{Children}</UserProvider>

    )

}

export default AppProvider;