import { FaAppStore } from "react-icons/fa";
import React from "react";
import "./sidebar.scss";
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

const SideBar = () => {
  return (
    <div className="sidebar">
      {/*Logo section*/}
      <div className="top">
        <NavLink to="/" className="logo">
          <img className="logo" src={Logo} alt="Klasha Logo" />
        </NavLink>
      </div>

      {/*Main Pages Section*/}
      <div className="center">
        <ul>
          <p className="title">Main Pages</p>
          <NavLink to="/dashboard" className="li" activeClassName="active">
            <TbChartPie className="icon" />
            <span> Dashboard</span>
          </NavLink>
          <NavLink to="/balances" className="li" activeClassName="active">
            <CiWallet className="icon" /> <span>Balances</span>
          </NavLink>
          <NavLink to="/transaction" className="li " activeClassName="active">
            <TbArrowsSort className="icon" /> <span>Transactions</span>
          </NavLink>
          <NavLink to="/analytics" className="li " activeClassName="active">
            <TfiBarChartAlt className="icon" /> <span>Analytics</span>
          </NavLink>
          <NavLink to="/marketing" className="li " activeClassName="active">
            <BsMegaphone className="icon" /> <span>Marketing</span>
          </NavLink>
          <NavLink to="/exchangeRates" className="li " activeClassName="active">
            <HiArrowPath className="icon" /> <span>Exchange rates</span>
          </NavLink>

          {/*Accept Payment Section*/}
          <p className="title">Accept Payments</p>
          <NavLink to="/checkouts" className="li " activeClassName="active">
            <AiOutlineShoppingCart className="icon" /> <span>Checkouts</span>
          </NavLink>
          <NavLink to="/paymentLink" className="li " activeClassName="active">
            <BiLinkAlt className="icon" /> <span>Payment Links</span>
          </NavLink>

          {/*Send Payment Section*/}
          <p className="title">Send Payments</p>
          <NavLink to="/wire" className="li " activeClassName="active">
            <BiLinkAlt className="icon" /> <span>Wire</span>
          </NavLink>
        </ul>
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

export default SideBar;
