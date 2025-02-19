import React from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import imgplaceholder from '../../assets/blog/graphi.jpeg';

function Product({ book }) {
  const navigate = useNavigate();

  return (
   
    <>

      {book?.map((item, index) => {
        const thumbnail =
          item.volumeInfo.imageLinks?.smallThumbnail || imgplaceholder; // Use placeholder if thumbnail is missing

        return (
          <div className="product-card" key={item.id || index}>
            <div
              className="nft"
              onClick={() => navigate(`/details/${item.id}`)}
             /*  role="button"
              tabIndex={0} // For keyboard navigation
              onKeyDown={(e) => e.key === "Enter" && navigate(`/details/${item.id}`)} */
            >
              <div className="figure">
                <img
                  className="img-grid"
                  src={thumbnail}
                  alt={item.volumeInfo.title || "Book Cover"}
                />
                <p style={{color:'wheat',fontWeight:'bold'}}>details</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;

