import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./oneproduct.css";

const Oneproduct = ({ productId }) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div className="container">
      <div className="single-product">
        <div className="row">
          <div className="col-6">
            <div className="product-image-main">
              <img
                src={product.volumeInfo.imageLinks.smallThumbnail}
                alt=""
                id="product-main-image"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="breadcrumb">
              <span>
                <Link to={"/"}>Home</Link>
              </span>
            </div>

            <div className="product">
              <div className="product-title">
                <h2>{product.volumeInfo.title}</h2>
              </div>

              <div className="product-price">
                <span className="offer-price">$99.00</span>
                <span className="sale-price">
                  {product.volumeInfo.pageCount}
                </span>
              </div>

              <div className="product-details">
                <h3>author:{product.volumeInfo.authors}</h3>
                {
                  <div onClick={handleShow}>
                    {show ? (
                      <p>More....</p>
                    ) : (
                      <p>
                        {product.volumeInfo.description}:<p>show less..</p>
                      </p>
                    )}
                  </div>
                }
              </div>
              <span className="divider"></span>

              <div className="product-btn-group">
                <div className="button buy-now">
                  <i className="bx bxs-zap"></i> Buy Now
                </div>
                <div className="button add-cart">
                  <i className="bx bxs-cart"></i> Add to Cart
                </div>
                <button className="button heart">Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oneproduct;
