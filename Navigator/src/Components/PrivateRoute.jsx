import { Children } from "react";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem("token");
  if (!token) {
    return <h1>not login</h1>;
  }
  return children;
};

export default PrivateRoute;
