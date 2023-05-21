import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { user1 } from "../constants/users";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: JSX.Element | any) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveUser = localStorage.getItem("user");

    if (recoveUser) {
      setUser(JSON.parse(recoveUser));
      navigate("/lobby");
    }
  }, []);
  const login = (email: string, password: string) => {
    const userIndex = user1.findIndex(
      (user) => user.email === email && user.senha === password
    );

    if (userIndex !== -1) {
      const loggedUser = user1[userIndex]?.key;
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      navigate("/lobby");
    } else {
      toast.error("Email ou senha inválidos");
      navigate("/");
    }
  };
  const logout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("user");
    toast.success("Até a próxima!");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      <Toaster />
      {children}
    </AuthContext.Provider>
  );
};
