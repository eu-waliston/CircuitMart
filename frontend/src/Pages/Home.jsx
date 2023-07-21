import React from "react";
import "./Home.scss";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import { AiFillCreditCard } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-component">
      <div className="promotion-section">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swipper-style">
            <img src="./images/1.png" alt="pessoa" className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img src="./images/2.png" alt="pessoa" className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img src="./images/3.png" alt="pessoa" className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img src="./images/4.png" alt="pessoa" className="swiper-img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="advantages-section">
        <div className="advantages">
          <RiSecurePaymentLine className="icon" />
          <h3>Pagamento rápido e seguro!</h3>
        </div>
        <div className="advantages">
          <AiFillCreditCard className="icon" />
          <h3>Até 10 parcelas sem juros!</h3>
        </div>
        <div className="advantages">
          <FaHandHoldingUsd className="icon" />
          <h3>Parcelamento sem cartão</h3>
        </div>
        <div className="advantages">
          <MdPhoneAndroid className="icon" />
          <h3>Via Pix</h3>
        </div>
      </div>
      <h1>Ofertas do dia</h1>
      <div className="daily-offers-section"></div>
      <Link to={"/thunder"}>
      <img src="./images/relampago.png" alt="ofertas" className="ofertas" />
      </Link>
      <div className="daily-offers-section"></div>
    </div>
  );
};

export default Home;
