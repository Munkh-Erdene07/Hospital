import React from "react";
import CaruoselData from "../../data/CaruoselData";
import CarouselBtn from "./CarouselBtn";
import Icon from "../utils/Icons";
export default function CaruoselItem() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const icon = Icon();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === CaruoselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? CaruoselData.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === CaruoselData.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <ul className="caruosel-slide wfull">
      {CaruoselData.map((el, index) => (
        <li
          key={index}
          className={`caruosel-img wfull ${
            currentSlide === index ? "active" : ""
          } `}
        >
          <img
            src={el.img}
            alt={`caruosel-slide-img-${index + 1}`}
            className="wfull"
          />
        </li>
      ))}
      <div className="caruosel-btn">
        <CarouselBtn click={handlePrevSlide}>
          <icon.FaArrowLeft />
        </CarouselBtn>
        <CarouselBtn click={handleNextSlide}>
          <icon.FaArrowRight />
        </CarouselBtn>
      </div>
    </ul>
  );
}
