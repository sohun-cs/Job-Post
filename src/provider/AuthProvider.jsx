import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = async () => {
        setLoading(true)
        const { data } = await axios(`${import.meta.env.VITE_APP_URL}/logout`, {
            withCredentials: true,
        })
        console.log(data)
        return signOut(auth)
    }

    const updateUser = (name, photo, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            email: email
        });
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = { user, loading, setUser, createUser, signIn, googleSignIn, logOut, updateUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;