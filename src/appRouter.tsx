import Login from "./components/login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";
import GlobalStyle from "./style/globalStyle";
import { Fragment, useContext } from "react";
import { Lobby } from "./components/lobby";
export const AppRoutes = () => {
  const Private = ({ children }: any) => {
    const { authenticated }: any = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Fragment>
        <AuthProvider>
          <Routes>
            <Route
              path="/lobby"
              element={
                <Private>
                  <Lobby />
                </Private>
              }
            />
            <Route path="/" element={<Login />} />
          </Routes>
          <GlobalStyle />
        </AuthProvider>
      </Fragment>
    </BrowserRouter>
  );
};
