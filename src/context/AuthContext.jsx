import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(void 0);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("skymart_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("skymart_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("skymart_user");
    }
  }, [user]);
  const login = (email, name = "Test User") => {
    setUser({ email, name });
  };
  const register = (email, name) => {
    setUser({ email, name });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, register }}>
      {children}
    </AuthContext.Provider>;
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export {
  AuthProvider,
  useAuth
};
