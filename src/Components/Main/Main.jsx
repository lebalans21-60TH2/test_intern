import React from "react";
import Destination from "./DataDestination";
import DataValueTrips from "./DataValueTrip";
import DataTips from "./DataTips";
import ChooseUs from "./DataChooseUs";
import "./main.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import secondHero from "../../Assets/pexels-photo-24377.jpg";
import { MdArrowForwardIos } from "react-icons/md";

const Main = () => {
  return (
    <section className="main container section">
      {/* popular Destination */}
      <div className="secTitle">
        <h2 className="title">Popular Destinations</h2>
        <span className="smallText">World's best tourist destinations</span>
      </div>
      {/* popular destination card */}
      <div className="secContent grid">
        {Destination.map(({ id, desTitle, imgSrc }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img
                  src={imgSrc}
                  alt="img destination"
                  className="imgDestination"
                />
                <div className="cardInfo">
                  <h2 className="desTitle">{desTitle}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Values trips */}
      <div className="secTitle">
        <h2 className="title">Best Value Trips</h2>
        <span className="smallText">Best offers trips from us</span>
      </div>
      <div className="secTripsContent grid">
        {DataValueTrips.map(
          ({
            id,
            desTitle,
            imgSrc,
            des,
            price_tour,
            review,
            total_review,
            promotion,
            day,
          }) => {
            return (
              <div key={id} className="singleDestinationTrip">
                <div className="imageDiv">
                  <img
                    src={imgSrc}
                    alt="img destination"
                    className="imgDestination"
                  />
                  <div className="priceTour">
                    <h2 className="price">{price_tour} $</h2>
                  </div>
                </div>
                <div className="inforTour">
                  <h4 className="desTitle">{desTitle}</h4>
                  <div className="desc">
                    <p className="desTour">{des}</p>
                  </div>
                  <div className="reviews flex">
                    <div className="flex">
                      <span className="starReview">{review}</span>
                      <p className="totalRivew">{total_review} reviews</p>
                    </div>
                    <div className="flex">
                      <AiOutlineClockCircle className="icon" />
                      <p className="times">{day}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Why choose us */}
      <div className="secTitle">
        <h2 className="title">Why Choose Us</h2>
        <span className="smallText">
          Here are reasons you should plan trip with us
        </span>
      </div>

      <div className="secTripsContent grid">
        {ChooseUs.map(({ id, desTitle, imgSrc, desc }) => {
          return (
            <div key={id} className="singleChooseUs">
              <div className="imageWCU">
                <img
                  src={imgSrc}
                  alt="img destination"
                  className="imgChooseUs"
                />
              </div>
              <div className="inforChooseUs">
                <h4 className="desTitleChooseUs">{desTitle}</h4>
                <div className="desc">
                  <p className="desChooseUs">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second hero */}
      <div className="seconHero">
        <img src={secondHero} alt="" className="imgSecondHero" />
      </div>

      {/* Articles & Tips */}
      <div className="secTitle">
        <h2 className="title">Articles & Tips</h2>
        <span className="smallText">
          Explore some of the best tips from around the world
        </span>
      </div>
      <div className="secTipsContent grid">
        {DataTips.map(({ id, dayTime, desTitle, imgSrc, desc }) => {
          return (
            <div key={id} className="singleDestinationTips">
              <div className="imageDivTips">
                <img
                  src={imgSrc}
                  alt="img destination"
                  className="imgDestination"
                />
              </div>

              <div className="cardInfoTips">
                <div className="post_info_date">
                  <span className="date_time">{dayTime}</span>
                </div>
                <h6 className="desTitleTips">{desTitle}</h6>
                <div className="descTips">
                  <p className="desTipsText">{desc}</p>
                </div>
                <div className="post_button_wrapper flex">
                  <span>Read More</span>
                  <MdArrowForwardIos />
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
