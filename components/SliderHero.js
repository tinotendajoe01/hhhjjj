import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const SliderHero = () => {
  return (
    <div className="relative px-1 ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showIndicators={false}
      >
        {/* <div>
          <img loading="lazy" src="/banner/owl (2).jpg" alt="" />
        </div> */}
        {/* <div>
          <img loading="lazy" src="/banner/owl (2).png" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/banner/demo (4).jpg" alt="" />
        </div>*/}
        <div>
          <img loading="lazy" src="/banner/ad2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/banner/ad2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/banner/ad2.jpg" alt="" />
        </div>
        {/* <div>
          <img loading="lazy" src="/banner/owl (1).jpg" alt="" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default SliderHero;
