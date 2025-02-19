import React from "react";
import "./picture.css";
import img2 from "../../assets/img7.png";
import img3 from "../../assets/pngegg.png";
import { useNavigate } from "react-router-dom";

function PictureDetails() {
  const navigate = useNavigate();
  return (
    <section id="sellpage">
      <div className="bg-img">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="img-f" style={{ width: "25%" }} src={img2} alt="$" />
          <p style={{ color: "wheat", fontSize: "1vw" }}>
            To learn to read is to light a fire; every syllable that is spelled
            out is a spark. <hr /> <p>-Victor Hugo,Les Miserables.</p>
          </p>
          <span className="span-edt"> &#47;</span>
          <div>
            <h4 className="h4-edt">Sell Your Book Now </h4>
            <button className="btn-more" onClick={()=>navigate('/sellinghomepage')} >More About</button>
          </div>
        </div>

        <img className="img-f" style={{ width: "15%" }} src={img3} alt="l" />
      </div>
    </section>
  );
}

export default PictureDetails;
