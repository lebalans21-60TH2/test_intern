import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/logo1.png";
import { HiBars4 } from "react-icons/hi2";
import { BiCartAlt } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineCalendar } from "react-icons/ai";
import herovideo from "../../Assets/herovideo.mp4";
import { CiSearch } from "react-icons/ci";
import { TfiExchangeVertical } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const [navbar, setNavbar] =useState(false)

  //function show navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //function close navbar
  const closeNavbar = () => {
    setActive("navBar");
  };

  // Chang backgound navbar
  const changBackground =()=>{
   
    if(window.scrollY>=400){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changBackground  )
    return (
    <section className="navbarSection">
      {/* Navbar */}
      {/* <header className="header flex active"> */}
      <header className={navbar ?'header flex active':'header flex'}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <img src={logo} alt="logo" className="logoo" />
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Tours
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Booking
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Destinations
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                ShortCodes
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Shop
              </a>
            </li>
           
          </ul>
          
          <div onClick={closeNavbar} className="closeNavbar">
         
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="togleNavbar">
       
            
          <HiBars4 className="icon" />
          <BiCartAlt className="icon" />
        </div>
      </header>
      {/* Hero */}
      <div className="home">
        <div className="overlay">
          <video src={herovideo} muted autoPlay loop type="video/mp4"></video>
        </div>
        <div className="homeContent container">
          <div className="textDiv">
            <h1 className="homeTitle">Where do you want to go?</h1>
            <span className="smallText">
              Trips, experiences, and places. All in one service.
            </span>
          </div>

          <div className="cardDiv grid">
            <div className="searchContainer grid">
              <div className="destinationInput">
                <div className="input flex">
                  <input type="text" placeholder="Destination, city" />
                  <CiSearch className="icon" />
                </div>
              </div>
              <div className="monthInput">
                <div className="input flex">
                  <select>
                    <option value="anymonth">Any Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">may</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">december</option>
                  </select>
                  <AiOutlineCalendar className="icon" />
                </div>
              </div>
              <div className="sortByDateInput">
                <div className="input flex">
                  <select>
                    <option value="sortbydate">Sort By Date</option>
                    <option value="pricelowtohight">Price Low to High</option>
                    <option value="pricehighttolow">Price High to Low</option>
                    <option value="sortbyname">Sort By Name</option>
                    <option value="sortbypopularity">Sort By Popularity</option>
                    <option value="sortbyreviewscore">
                      Sort By Review Score
                    </option>
                  </select>
                  <TfiExchangeVertical className="icon" />
                </div>
              </div>
              <div className="destinationInput">
                <div className="inputSearch flex">
                  <button className="btnSearch">Search</button>
                </div>
              </div>
              <div className="advancedSearch">
              <div className="searchOptions flex">
                <span>
                  <IoIosArrowDown className="icon" /> Advanced Search
                </span>
              </div>
            </div>
            
            </div>
            <div className="searchOptions_media">
                <span>
                  <IoIosArrowDown className="icon" /> Advanced Search
                </span>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
