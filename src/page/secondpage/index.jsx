import React from 'react';
import style from './info.module.scss';
import grouppic from '../../images/Group12.png';
import Header from '../../components/header';
import TopGreen from '../../svg/topgreen';
import GreenAnchor from '../../svg/greenanchor';
import Caal from '../../svg/caal';
import YellowAnchor from '../../svg/yellowanchor';

const Info = () => {
  return (
    <section className={style.infoSection}>
      <Header />
      <div className={style.textsection}>
        <h3 className={style.productDemo}>5-minute product demo</h3>
        <h3 className={style.reviews}>more reviews, more customers</h3>
        <p>
          Watch how AmazingInfluencers helps increase shopper feedback on autopilot to grow your business.
        </p>
      </div>

      <div className={style.video}>
        <img src={grouppic} alt="" />
      </div>

      <div className={style.readytostartsection}>
        <div className={style.readytostartcontent}>
          <h4>ready to start?</h4>
          <p>
            <span>Plans</span> start at just $19 /month and scale based on your success rate, not features.
          </p>
          <p className={style.question}>Questions? Call us: <span> 090078601</span></p>
        </div>

        <div className={style.boxes}>
          <div className={style.greenbox}>
           
             <div className={style.toparrow} > 
              <GreenAnchor />
               </div> 
            <h4>Start Now</h4>
            <p>Jump right into the dashboard and create a working survey within 2 minutes.</p>
            <a href="#">Start Now <GreenAnchor /></a>
          </div>
          <div className={style.yellowbox}>
           
            <div className={style.calllogo} >
              <Caal />
            </div>
            
            <h4>1:1 Onboarding</h4>
            <p>Need to speak with a human? Book a private demo call with our team to learn more about us.</p>
            <a href="#">Book a demo <YellowAnchor/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
