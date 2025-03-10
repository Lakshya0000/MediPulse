import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth,setIsAuth] = useState(false);
  const [role,setRole] = useState("user");
  useEffect(()=>{
    const check = async() => {
        try{
            const res = await axios.get(`http://localhost:8080/verify/`,{withCredentials:true,credentials:'include'})
            if(res.status === 200){
                console.log({"hi":res.data});
                setUser(res.data.data);
                setRole(res.data.role);
                setIsAuth(true);
                return;
            }
        }
        catch(err){
            console.log(err);
            setUser(null);  
            setIsAuth(false);
        }
    }
    check();
  },[])
  return (
    <AuthContext.Provider value={{ isAuth, user, setUser, setIsAuth, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
