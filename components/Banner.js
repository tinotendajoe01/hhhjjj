import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showIndicators={false}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images.myguide-cdn.com/zimbabwe/companies/kenlink-pharmacy/large/kenlink-pharmacy-512578.png"
            alt=""
          />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
