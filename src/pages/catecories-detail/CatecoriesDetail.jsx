import React, { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import  Navbar from '../../navbar/Navbar' 
function CatecoriesDetail() {
  const { title } = useParams();
  const naviGate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${title}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [title]);

  if (loading) return <div className="loader"></div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div>
      <Navbar/>
      <section className="cards-wrapper">
        {product.map((item, index) => (
          <div className="card-grid-space" key={index}>
            <div className="card">
              <div>
                <p>{item.volumeInfo.title}</p>
                <div className="date">
                  <img
                    src={
                      item.volumeInfo.imageLinks &&
                      item.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt=""
                    className="img-ed"
                  />
                </div>
                <div className="tags">
                  <div
                    className="tag"
                    onClick={() => naviGate(`/details/${item.id}`)}
                  >
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CatecoriesDetail;
