import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import Loader from "../Components/Loader";
function Dashboard() {
  const { logoutUser, authState } = useContext(Authcontext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
