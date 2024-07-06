import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  // eslint-disable-next-line no-unused-vars
  const { authState, loginUser, logoutUser } = useContext(Authcontext);

  if (!authState.isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
export default PrivateRoute;
