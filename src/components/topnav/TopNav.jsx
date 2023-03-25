import { FaAppStore } from "react-icons/fa";
import "./topnav.scss";
import { BiUserCircle } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="flex-container">
        <div></div>
        <ul>
          <li>
            <BiUserCircle className="icon" />
            <IoIosArrowDown className="icon-arrow" />
          </li>
          <li>
            <RiEnglishInput className="icon" />
            <IoIosArrowDown className="icon-arrow" />
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default TopNav;
