import React from "react";
import Header from "../../components/header";
import style from "./home.module.scss";
import { useNavigate } from 'react-router-dom';
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";
import Facebook from "../../images/Facebook.png"
import insta from "../../images/Instagram.png"
import twtr from "../../images/TwitterX.png"
import SimpleSlider from "../../components/slickslider/slider";
const Home = () => {
  const navigate = useNavigate();

  const navigateToDemo = () => {
    navigate('/demo');
  };
  return (
    <>
     <section className={style.holepage}>
      <Header />
      <section className={style.sec1}>
        <div>
          <div className={style.mainheaddiv}>
            <text className={style.mainheading}>
              Get <span className={style.mainheadingspan}>Rewards</span>&{" "}
              <span className={style.mainheadingspan}>Cashback</span> For Your
              Purchases
            </text>
          </div>
          <p className={style.sec1p}>
            Scan the QR code on your receipt and unlock exclusive offers.
          </p>
          <div className={style.btndiv}>
            <button className={style.btn1}>Find your rewards now</button>
            <button className={style.btn2} onClick={navigateToDemo}>Watch The Demo</button>
          </div>
        </div>
        <div className={style.picdiv1}>
          <img src={pic1} alt="mainpic" className={style.sec1pic1} />
        </div>
      </section>

      <section className={style.sec2main}>
        <h2 className={style.h2sec2}>how it works</h2>

       
          <div className={style.stepscontainer}>
            <div className={style.step}>
              <div className={style.icon}>
                <img src={pic2} alt="QR Code" />
              </div>
              <div className={style.number}>
                <span>1</span>
              </div>
              <div className={style.content}>
                <h3>Scan the QR code</h3>
                <p>Find the unique QR code on your receipt.</p>
              </div>
            </div>
            <div className={style.step2}>
              
              <div className={style.content}>
                <h3>Enter your details</h3>
                <p>Simply enter a few details about your purchase.</p>
              </div>
              <div className={style.number}>
                <span>2</span>
              </div>
              <div className={style.icon2}>
                <img src={pic3} alt="Details" />
              </div>
             
            </div>
            <div className={style.step3}>
              <div className={style.icon3}>
                <img src={pic4} alt="Feedback" />
              </div>
              <div className={style.number}>
                <span>3</span>
              </div>
              <div className={style.content}>
                <h3>Share your feedback</h3>
                <p>Answer a few quick questions about your experience.</p>
              </div>
            </div>
            <div className={style.step4}>
              <div className={style.content}>
                <h3>Claim your reward</h3>
                <p>Unlock exclusive offers and cashbacks!</p>
              </div>
              <div className={style.number}>
                <span>4</span>
              </div>
              <div className={style.icon4}>
                <img src={pic5} alt="Reward" />
              </div>
            </div>
          </div>
        
      </section>
    <section>
    <SimpleSlider />
    </section>
      <section className={style.sec3main}>
        <div>
          <h2 className={style.sec3h2}>
              Try It Now
          </h2>
          <p className={style.sec3p}>
          Scan the QR code, tell us your thoughts, and unlock exclusive rewards like instant cashbacks, discounts on future purchases, early access to new products. It's that easy!
          </p>
          <button className={style.sec3btn}>Scan QR Code Now</button>
        </div>
        <img src={pic6} alt="" />
      </section>
      </section>
      <section className={style.sec4}>
    <div className={style.borderlast}>
        <p className={style.footertext}>Amazing <span className={style.footerspan}>Influencers</span></p>
      </div>
      <div className={style.lastflexitems}>

      <small className={style.smalltxt}>© 2024 Amazinginfluencers.com | All rights reserved.</small>
      <div className={style.tags}>
        <img src={Facebook} alt="" />
        <img src={insta} alt="" />
        <img src={twtr} alt="" />
      </div>
      </div>
      </section>
     
    </>
  );
};

export default Home;
