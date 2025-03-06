import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth,setIsAuth] = useState(false);
  useEffect(()=>{
    const check = async() => {
        try{
            const res = await axios.get("http://localhost:8080/user/",{withCredentials:true});
            if(res.status === 200){
                console.log({"hi":res.data});
                setUser(res.data);
                setIsAuth(true);
                return;
            }
            else{
                console.log(res.data);
                setIsAuth(false);
            }
        }
        catch(err){
            console.log(err);
            setIsAuth(false);
        }
    }
    check();
  },[isAuth])

  return (
    <AuthContext.Provider value={{ isAuth, user, setUser, setIsAuth, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
