import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./oneproduct.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import Navbar from "../../navbar/Navbar";
import imgplaceholder from "../../assets/blog/graphi.jpeg";

const Oneproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(true);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShows(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loader"></div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  const { volumeInfo, saleInfo } = product;

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="single-product">
          <div className="row">
            <div className="col-6">
              <div className="product-image-main">
                <img
                  src={volumeInfo.imageLinks?.smallThumbnail || imgplaceholder}
                  alt={volumeInfo.title || "No image available"}
                  id="product-main-image"
                />
              </div>
            </div>
            <div className="col-6">

              <div className="product">
                <div className="product-title">
                  <h2>{volumeInfo.title}</h2>
                </div>

                <div className="product-price">
                  {/* Offer price */}
                  <span className="offer-price">
                    {saleInfo?.saleability === "FOR_SALE" && saleInfo?.retailPrice
                      ? `${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}`
                      : <span className="stock-edit">Out of stock</span>}
                  </span>
                  {/* Sale price (e.g., discounted price or page count info) */}
                  <span className="sale-price">
                    Pages: {volumeInfo?.pageCount || ""}
                  </span>
                </div>

                <div className="product-details">
                  <h3>Author: {volumeInfo.authors?.join(", ") || "Unknown"}</h3>
                  <div onClick={handleShow}>
                    {show ? (
                      <p style={{ cursor: "pointer", color: "wheat" }}>
                        More....
                      </p>
                    ) : (
                      <div>
                        {volumeInfo.description || "No description available."}
                        <span style={{ cursor: "pointer", color: "wheat" }}>
                          Show less..
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="divider"></span>

                <div className="product-btn-group">
                  <div
                    className="button add-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="bx bxs-cart"></i>{" "}
                    {shows ? "Add to Cart" : "Added to Cart"}
                  </div>
                  <button className="button heart">Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oneproduct;

