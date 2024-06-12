import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productData, setproductData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setaSearch] = useState("");
  const FetchProduct = () => {
    axios
      .get("  http://localhost:8000/product", {
        params: {
          category: filter,
          _sort: "price",
          _order: sort,
          _limit: "5",
          _page: page,
          q: search,
        },
      })
      .then((res) => setproductData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchProduct();
  }, [filter, sort, page, search]);
  return (
    <div>
      <h1>Homepage</h1>
      <Button variant="primary" onClick={handleShow}>
        Post Form
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button>Delete Items</button>
      <br />
      <input
        type="text"
        onChange={(e) => setaSearch(e.target.value)}
        placeholder="search"
      />
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button disabled>{page}</button>
      <button disabled={page == 4} onClick={() => setPage(page + 1)}>
        next
      </button>

      {/* sort and filter */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
          <option value={null} hidden>
            select your items
          </option>
          <option value="men's clothing"> men</option>
          <option value="women's clothing"> women</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select>
        <div>
          <button onClick={() => setSort("asc")}>Low To High</button>

          <button onClick={() => setSort("desc")}>High To Low </button>
        </div>
      </div>

      {/* ##########################################################           */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        {productData.map((el) => (
          <div key={el.id} style={{ border: "2px solid teal" }}>
            <p>{el.id}</p>
            <img src={el.image} alt="" height={"200px"} width={"200px"} />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
            <p>{el.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;