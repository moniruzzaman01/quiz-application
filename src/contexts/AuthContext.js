import React, { useContext, useEffect, useState } from 'react'
import '../firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    }
    from 'firebase/auth'

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function Provider({children}){
    const [loading, setLoading]=useState(true)
    const [currentUser, setCurrentUser]=useState(null)

    useEffect(() =>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    // Signup function
    async function Signup(email, password, username){
        const auth=getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // Update prifile
        await updateProfile(auth.currentUser,{
            displayName:username,
        })
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
        
    }
    // Login function
    function Login(email, password){
        const auth=getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout function
    function Logout(){
        const auth=getAuth();
        return signOut(auth)
    }

    const value={
        currentUser,
        Signup,
        Login,
        Logout,
    }
    return(
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}