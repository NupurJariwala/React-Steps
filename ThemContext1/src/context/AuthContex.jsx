import { createContext, useState } from "react";

export const AuthContex = createContext();
// eslint-disable-next-line react/prop-types
export function AuthContexProvider({ children }) {
  const [isauth, setauth] = useState(false);

  const login = () => {
    setauth(true);
  };

  const logout = () => {
    setauth(false);
  };
  return (
    <AuthContex.Provider value={{ isauth, login, logout }}>
      {children}
    </AuthContex.Provider>
  );
}
