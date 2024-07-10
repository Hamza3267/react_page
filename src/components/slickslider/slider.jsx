import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../../images/backpic1.png";
import pic2 from "../../images/backpic2.png";
import pic3 from "../../images/backpic3.png";
import pic4 from "../../images/backpic4.png";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";
import style from "./slide.module.scss";
import coma from "../../images/clarityblock.png";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={style.mainsec}>
        <Slider {...settings} className={style.editsliderr}>
          <div className={style.mainslider}>
            <img src={profile1} alt="" className={style.profile1edit} />
            <img src={pic1} alt="" />
            <img src={pic2} alt="" className={style.pic2edit} />
            <h4 className={style.h2edit}>Hannah Schmitt</h4>
            <p className={style.pedit}>Lead designer</p>
            <img src={coma} alt="" className={style.coma} />
            <p className={style.peditt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
              mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
              nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
              felis id augue sit cursus pellentesque enim{" "}
            </p>
          </div>
          <div className={style.mainslider2}>
            <img src={profile2} alt="" className={style.profile2edit} />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" className={style.pic3edit} />
            <h4 className={style.h3edit}>Hannah Schmitt</h4>
            <p className={style.p2edit}>Lead designer</p>
            <img src={coma} alt="" className={style.coma1} />
            <p className={style.p2editt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
            </p>
          </div>
          <div className={style.mainslider}>
            <img src={profile1} alt="" className={style.profile1edit} />
            <img src={pic1} alt="" />
            <img src={pic2} alt="" className={style.pic2edit} />
            <h4 className={style.h2edit}>Hannah Schmitt</h4>
            <p className={style.pedit}>Lead designer</p>
            <img src={coma} alt="" className={style.coma} />
            <p className={style.peditt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
              mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
              nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
              felis id augue sit cursus pellentesque enim{" "}
            </p>
          </div>
        </Slider>
      </section>
    </>
  );
}
