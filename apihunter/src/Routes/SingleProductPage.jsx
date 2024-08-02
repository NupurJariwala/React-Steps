  /* eslint-disable jsx-a11y/alt-text */
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";

  function SingleProductPage() {
    const { id } = useParams();
    const [data, setData] = useState({});
    console.log(id);

    useEffect(() => {
      axios
        .get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
        )
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
      <div data-testid="products-container">
        <div>
          <h3 data-testid="product-brand">{data.brand}</h3>
        </div>
        <div>
          <img src={data.img} data-testid="product-image" />
        </div>
        <div data-testid="product-category">{data.category}</div>

        <div data-testid="product-details">{data.details}</div>
        <div data-testid="product-price">{data.price}</div>
      </div>
    );
  }
  export default SingleProductPage;
