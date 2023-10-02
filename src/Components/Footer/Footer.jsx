import React from "react";
import Awards from '../../Assets/awards.png'
import './Footer.css'

import { CiMobile4 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsAlarm } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoPinterest } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

import img1 from '../../Assets/footer1.jpg';
import img2 from '../../Assets/footer2.jpg';
import img3 from '../../Assets/footer3.jpg';
import img4 from '../../Assets/footer4.jpg';
import img5 from '../../Assets/footer5.jpg';
import img6 from '../../Assets/footer6.jpg';

const imgFooter = [
  {
    id: 1,
    imgSrc:img1
  },
  {
    id: 2,
    imgSrc:img2
  },
  {
    id: 3,
    imgSrc:img3
  },
  {
    id: 4,
    imgSrc:img4
  },
  {
    id: 5,
    imgSrc:img5
  },
  {
    id: 6,
    imgSrc:img6
  },
]

const Footer = () => {
  return (
    <section className="footer container section">
      <div className="footerContent grid">
        <div className="footTitle">
          <h2 className="title">Our Awards</h2>
          <p className="smallText">
            Our Awards London is a megalopolis of people, ideas and frenetic
            energy. The capital and largest city of the United Kingdom.
          </p>
          <div className="imgAward">
          <img src={Awards} alt="awards" />
          </div>
          
        </div>
        <div className="footTitle_contact">
          <h4 className="title">Contact Info</h4>
          <p className="smallText">
            <CiMobile4 className="icon" />
          1-567-124-44227
          </p>
          <span className="smallText">
            <CiLocationOn className="icon"/>
          184 Main Street East Perl Habour 8007
          </span>
          <span className="smallText">
            <BsAlarm className="icon"/>
          Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </span>
          <div className="societyContent">
            <div className="societyContainer_facebook">
               <BiLogoFacebook className="societyIcon"/>
            </div>
            <div className="societyContainer_twitter">
               <BiLogoTwitter className="societyIcon"/>
            </div>
            <div className="societyContainer_ytube">
               <BiLogoYoutube className="societyIcon"/>
            </div>
            <div className="societyContainer_pinterest">
               <BiLogoPinterest className="societyIcon"/>
            </div>
            <div className="societyContainer_instagram">
               <BiLogoInstagram className="societyIcon"/>
            </div>
          </div>
        </div>
        <div className="footTitle_trips">
          <h4 className="title">Recent Trips</h4>
         <div className="imgTrips ">
         {imgFooter.map(({ id, imgSrc }) => {
          return (
            <div key={id} className="singleImg">
              <div className="imageDiv">
                <img
                  src={imgSrc}
                  alt="img destination"
                  className="imgDestinationFt"
                />
                
              </div>
            </div>
          );
        })}
         </div>
          
        </div>
      </div>
    </section>
  );
};

export default Footer;
