import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./offerpage.css";
import img1 from '../../assets/offer-imgs/fif.png'
import img2 from '../../assets/offer-imgs/super.png'
import img3 from '../../assets/offer-imgs/spacial.png'
import img4 from '../../assets/offer-imgs/rot.png'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

function Offerpage() {
  const Offer = [
    {
      id: 1,
      title: "50% off hurry up sign up and buy your first dreambook",
      offer: "Get your first purchase with 50% off",
      url: img1,
    },
    {
      id: 2,
      title: "Regular Discounts for everyday",
      offer: "Get regular discount of 5%",
      url: img3,
    },
    {
      id: 3,
      title: "Random selected onces",
      offer: "Get 10% off random onces EveryDAY",
      url:img2 ,
    },
  ];

  
  return (
    <div className="container-offerpage" id="offerpage">
      <div className="head-offer">
        <h1 className="headings">OFFerZone...</h1>
        <img
          src={img4}
          alt="smile"
          className="smile"
        />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
       
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 2.5,
        }}
        spaceBetween={200}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Set the delay for 2 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide on small screens (≥ 640px)
          768: { slidesPerView: 2 }, 
          1160:{slidesPerView:2},// 2 slides on medium screens (≥ 768px)
          1240: { slidesPerView: 3 },
        
        }}
        speed={4000}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {Offer &&
          Offer.map((offers) => (
            <SwiperSlide key={offers.id}>
            <div className="offer-container" 
            style={{backgroundImage:`url(${offers.url})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            height:'50vh'
            }}>
              <h3>{offers.title}</h3>
              </div>  
            </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Offerpage;
