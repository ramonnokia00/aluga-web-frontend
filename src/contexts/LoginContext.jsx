import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {


    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({});
    useEffect(() => {
const token = sessionStorage.getItem("token");
if(token){
    setLogado(true);
    setUsuario(JSON.parse(sessionStorage.getItem("usuario")))
}
    },[logado]); 
    return (
        <LoginContext.Provider value={{ logado, setLogado, usuario }}>
            { children }
        </LoginContext.Provider>
    );
}

export default LoginProvider;