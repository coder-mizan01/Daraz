import React from "react";

//css
import "../CSS/Cover.css";

//Layout
import Menubar from "./Menubar";

const Cover = () => {




  return (
    <>
  <section id="cover">

  <Menubar />

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide4.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide5.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="slide3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </section>

    </>
  );
};

export default Cover;