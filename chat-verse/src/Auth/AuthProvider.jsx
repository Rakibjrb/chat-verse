import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import auth from "./auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const emailPasswordSignUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const data = {
    user,
    loading,
    emailPasswordSignUp,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => unSubscribe();
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
