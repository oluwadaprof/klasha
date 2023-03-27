import { FiMenu } from "react-icons/fi";
import "./topnav.scss";
import { BiUserCircle } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import MobileNav from "../../components/mobileNav/MobileNav";

const TopNav = () => {
  //handle mobile nav display on screen less than 1024
  const [mobileNav, setMobileNav] = useState(false);

  const handleOpen = () => {
    setMobileNav(true);
  };
  const handleRemoveMenu = () => {
    setMobileNav(false);
  };

  //remove icon on large screen
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <>
      <div className="topnav">
        {mobileNav && <MobileNav handleRemoveMenu={handleRemoveMenu} />}
          {screenWidth < 1024 ? (
            <FiMenu
              className='menu_icon'
              style={{ display: `${mobileNav === true ? "none" : "block"}` }}
              onClick={handleOpen}
            />
          ) : (
            <div></div>
          )}
        <div className="flex-container">
          <ul>
          
            <div className="profile">
              <BiUserCircle className="icon" />
              <IoIosArrowDown className="icon-arrow" />
            </div>
            <div className="logout">
              <RiEnglishInput className="icon" />
              <IoIosArrowDown className="icon-arrow" />
            </div>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
};

export default TopNav;
