import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const [userVerified, setUserVerified] = useState(false)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      
      if(currentUser){
        fetch(`https://tech-sale-server.vercel.app/users?email=${currentUser.email}`)
        .then((res) => res.json())
        .then((data) => {    
          setRole(data.role);
          setUserVerified(data.verified)
        })
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        logIn,
        updateName,
        googleLogIn,
        gitHubLogIn,
        logOut,
        isLoading,
        setLoading,
        role,
        setRole,
        userVerified,
        setUserVerified
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
