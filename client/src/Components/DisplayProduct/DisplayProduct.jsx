import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DisplayProduct.css";
import Header from "../Header/Header";

const DisplayProduct = () => {
  const [refreshCart, setRefreshCart] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  // Getting products
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data)
        setProduct(res.data);
        setRefreshCart(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  // Add to cart handle
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/users/addToCart/${id}`, product ,{ withCredentials: true })
      .then((res) => {
        console.log(res);
        setRefreshCart(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header refreshCart={refreshCart} setRefreshCart={setRefreshCart} />
      <div className="container">
        <div className="d-flex display-one-container">
          <div>
            <img
              className="card-img-top mangaCoverImage display-one-image"
              style={{ width: "50%", height: "auto", boxShadow:"1px 1px 5px 4px #aaaaaa" }}
              src={product.image}
              alt="Cardpic"
            />
          </div> 
          <div>
            <h2>{product.productName}</h2>
            <h5 className ="price">${product.price}</h5>
            <h5>{product.category}</h5>
            <h6>{product.description}</h6>
            <button className="btn btn-primary" onClick={handleSubmit}>
              {" "}
              Add to cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
