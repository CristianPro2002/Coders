import { useEffect } from "react";
import { Carousel } from "antd";
import "./slider.css";

export default function Slider({ imgs, height, width = "100%" }) {

  useEffect(() => {
    let slider = document.getElementsByName("slider-content");
    slider.forEach((item) => {
      item.style.height = height;
      item.style.width = width;
    });
    let sliders = document.getElementsByName("slider-contentImgs");
    sliders.forEach((item) => {
      item.style.height = height;
      item.style.width = "100%";
    });
  }, [imgs, height, width]);

  return (
    <div className="slider">
      {imgs ? (
        <div className="slider-content" name="slider-content">
          <Carousel autoplay>
            {imgs.map((img, index) => {
              return (
                <figure key={index} className="slider-contentImgs" name="slider-contentImgs">
                  <img src={img} alt="Imagenes Carousel" className="slider-imgs" />
                </figure>
              );
            })}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
