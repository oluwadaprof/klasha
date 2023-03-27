import { FaAppStore } from "react-icons/fa";
import React from "react";
import "./sidebar.scss";
import { useState } from "react";
import Logo from "../../assets/klasha__logo 1.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <div className="sidebar">
      <div className="top">
        <img src={Logo} alt="Klasha Logo" />
      </div>
      <div className="center">
        <ul>
          <p className="title">Main Pages</p>
          <NavLink
            to="/dashboard"
            className="li"
            activeClassName="active"
          >
            <FaAppStore className="icon" />
            <span> Dashboard</span>
          </NavLink>
          <NavLink to="/balances" className="li" activeClassName="active">
            <FaAppStore className="icon" /> <span>Balances</span>
          </NavLink>
          <NavLink to="/transaction" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Transactions</span>
          </NavLink>
          <NavLink
            to="/analytics"
            className="li "
            activeClassName="active"
            
          >
            <FaAppStore className="icon" /> <span>Analytics</span>
          </NavLink>
          <NavLink to="/marketing" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Marketing</span>
          </NavLink>
          <NavLink to="/exchangeRates" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Exchange rates</span>
          </NavLink>

          <p className="title">Accept Payments</p>
          <NavLink to="/checkouts" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Checkouts</span>
          </NavLink>
          <NavLink to="/paymentLink" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Payment Links</span>
          </NavLink>

          <p className="title">Send Payments</p>
          <NavLink to="/wire" className="li " activeClassName="active" >
            <FaAppStore className="icon" /> <span>Wire</span>
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
