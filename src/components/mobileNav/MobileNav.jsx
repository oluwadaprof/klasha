import { FaAppStore } from "react-icons/fa";
import React from "react";
import "./mobilenav.scss";
import Logo from "../../assets/klasha__logo 1.png";
import { NavLink } from "react-router-dom";
import { TbChartPie } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { TbArrowsSort } from "react-icons/tb";
import { TfiBarChartAlt } from "react-icons/tfi";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { HiArrowPath } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


const MobileNav = ({handleRemoveMenu}) => {
  


  return (
    <div className="mobilenav">
      <div className="top">
        <NavLink className='mobile_logo' to="/">
        <img src={Logo} alt="Klasha Logo" />
        </NavLink>
       <IoMdClose className="close_icon" onClick={handleRemoveMenu}/> 
      </div>
      <div className="center">
        <div className="mobile_links">
          <p className="title">Main Pages</p>
          <NavLink
            to="/dashboard"
            className="li"
            activeClassName="active"
            onClick={handleRemoveMenu}
          >
            <TbChartPie className="icon" />
            <span> Dashboard</span>
          </NavLink>
          <NavLink to="/balances" className="li" activeClassName="active" onClick={handleRemoveMenu}>
            <CiWallet className="icon" /> <span>Balances</span>
          </NavLink>
          <NavLink to="/transaction" className="li " activeClassName="active" onClick={handleRemoveMenu} >
            <TbArrowsSort className="icon" /> <span>Transactions</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className="li "
            activeClassName="active"
            onClick={handleRemoveMenu}
          >
            <TfiBarChartAlt className="icon" /> <span>Analytics</span>
          </NavLink>
          <NavLink to="/marketing" className="li " activeClassName="active" onClick={handleRemoveMenu} >
            <BsMegaphone className="icon" /> <span>Marketing</span>
          </NavLink>
          <NavLink to="/exchangeRates" className="li " activeClassName="active" onClick={handleRemoveMenu}>
            <HiArrowPath className="icon" /> <span>Exchange rates</span>
          </NavLink>

          <p className="title">Accept Payments</p>
          <NavLink to="/checkouts" className="li " activeClassName="active" onClick={handleRemoveMenu}>
            <AiOutlineShoppingCart className="icon" /> <span>Checkouts</span>
          </NavLink>
          <NavLink to="/paymentLink" className="li " activeClassName="active" onClick={handleRemoveMenu}>
            <BiLinkAlt className="icon" /> <span>Payment Links</span>
          </NavLink>

          <p className="title">Send Payments</p>
          <NavLink to="/wire" className="li " activeClassName="active" onClick={handleRemoveMenu}>
            <BiLinkAlt className="icon" /> <span>Wire</span>
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <div className="color__option">
          {" "}
          <FaAppStore /> Support
        </div>
        <div className="color__option">
          {" "}
          <FaAppStore /> Hide panel
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
