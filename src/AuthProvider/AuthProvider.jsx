/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Component/Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth);
    }
    const signIn=(email ,password)=>{
        return signInWithEmailAndPassword(auth ,email,password)
    }

    useEffect(()=>{
       const unSubsubScribe = onAuthStateChanged(auth ,currentUser=>{
            console.log('user ins the auth state change',createUser);
            setUser(currentUser)
        });
        return()=>{
            unSubsubScribe()
        }
    },[])

// info tereasfire page authentication
    
        const AuthInfo = { user,createUser,logOut ,signIn }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;