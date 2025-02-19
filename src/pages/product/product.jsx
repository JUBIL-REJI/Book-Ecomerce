import React from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";

function Product({ book }) {
  const naviGate = useNavigate();

  return (
    <>
      {book?.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <div key={index} style={{ margin: "30px" }}>
              <div className="nft">
                <div
                  className="figure"
                  onClick={() => naviGate(`/details/${item.id}`)}
                >
                  <img
                    className="img-grid"
                    src={
                      item.volumeInfo.imageLinks &&
                      item.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt="Mountains"
                  />
                  <h3>go to Details</h3>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Product;
