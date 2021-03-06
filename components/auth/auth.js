import { createContext, useState, useEffect } from "react";

import * as firebase from 'firebase/app'
import "firebase/auth";
import app from "../../lib/firebase";



export const AuthContext = createContext();
export const AuthProvider = props => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, [])
    return (
        <AuthContext.Provider
            value={
                { currentUser }
            }
        >
                {children}
        </AuthContext.Provider>
    );


}