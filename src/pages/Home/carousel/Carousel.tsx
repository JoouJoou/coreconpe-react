import React, { useState } from "react";
import { Carousel } from "antd";
import banner from "../../../assets/imgs/gincana.jpeg";
import banner3 from "../../../assets/imgs/gincana.jpeg";
import "./Carousel.css"; // arquivo CSS personalizado

export default function Carrossel() {
  return (
    <div className="w-[100%] my-0 mx-auto">
      <Carousel autoplay autoplaySpeed={6000} dots>
        <div className="w-[100%] h-[100%]">
          <img src={banner} alt="Imagem 1" className="max-w-[100%] max-h-[100%]" />
        </div>
        <div>
          <img src={banner3} alt="Imagem 3" className="max-w-[100%] max-h-[100%]" />
        </div>
        <div>
          <img src={banner3} alt="Imagem 3" className="max-w-[100%] max-h-[100%]" />
        </div>
      </Carousel>
    </div>
  );
}
