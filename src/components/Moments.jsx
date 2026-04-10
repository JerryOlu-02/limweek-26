import "./styles/Moments.scss";

import Header from "../reusable-components/Header";
import BlockReveal from "../reusable-components/BlockReveal";

import { MOMENTS_IMAGES } from "../helpers/details";

import { ReactComponent as Arrow } from "../assets/svg/arrow-right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Mousewheel } from "swiper/modules";

export default function Moments() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const momentsImages = MOMENTS_IMAGES.map((moment, index) => {
    return (
      <SwiperSlide key={index} className="moments-image">
        <img src={moment} alt="Moment Image" />
      </SwiperSlide>
    );
  });

  const handleSlideChange = (swiper) => {
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  };

  return (
    <section className="section moments-section">
      <div className="moments">
        <Header
          caption="Moments"
          description="A glimpse into the highlights, energy, and connections from LIMWEEK 2025."
          // dark
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BlockReveal blockColor="rgba(10, 14, 40, 1)">
              <h2>Moments From</h2>
            </BlockReveal>

            <BlockReveal blockColor="rgba(10, 14, 40, 1)" delay={0.3}>
              <h2>Last Year</h2>
            </BlockReveal>
          </div>
        </Header>

        {/* <aside></aside> */}

        <aside className="moments-swiper_container">
          <Swiper
            className="moments-swiper"
            direction="horizontal"
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 1.8,
              },
              990: {
                slidesPerView: 2.5,
              },
            }}
            mousewheel={{ forceToAxis: true }}
            modules={[Mousewheel]}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
          >
            {momentsImages}
          </Swiper>

          <div className="swiper_btns">
            <button
              ref={prevBtnRef}
              onClick={() => swiperRef?.current.slidePrev()}
              className={`btn ${isBeginning ? "" : "active"}`}
            >
              <Arrow />
            </button>

            <button
              ref={nextBtnRef}
              onClick={() => swiperRef?.current.slideNext()}
              className={`btn ${isEnd ? "" : "active"}`}
            >
              <Arrow />
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
