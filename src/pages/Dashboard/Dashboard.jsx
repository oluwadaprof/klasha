import { useState, useEffect } from "react";
import chartImage from '../../assets/mainchart.png'
import ChartData from "../../components/chart/ChartData";
import MainChart from "../../components/chart/MainChart";
import SmallChart from "../../components/chart/SmallChart";
import { IoIosArrowDown } from "react-icons/io";
import { BiDownArrowAlt } from "react-icons/bi";
import "./dashboard.scss";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("default");

  const options = [
    { value: "default", label: "USD" },
    { value: "option1", label: "EUR" },
    { value: "option2", label: "GPB" },
    { value: "option3", label: "INR" },
  ];
  const emailOptions = [
    { value: "default", label: "Email" },
    { value: "option11", label: "adeekotobiloba8@gmail.com" },
    { value: "option22", label: "klasha@gmail.com" },
    { value: "option33", label: "findme@gmail.com" },
  ];

  // set default value
  useEffect(() => {
    setSelectedValue(options[0].value);
  }, []);
  return (
    <div className="dashboard">
      <section className="site__overview">
        <h1>Site Overview</h1>
        <div>
          <SmallChart />
          <ChartData />
          <ChartData />
          <ChartData />
        </div>
      </section>
      <section className="sales">
        <div className="first_sales-section">
          <header>
            <h2>Sales</h2>
            <span>|</span>
            <p id="week">7 days</p>
            <p id="month"> 30 days</p>
            <div>
              <select
                id="dropdownCurrency"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Email container */}
            <div className="email_container">
              <select
                id="dropdownMail"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,${new IoIosArrowDown().toString()}')`,
                }}
              >
                {emailOptions.map((emailOption) => (
                  <option key={emailOption.value} value={emailOption.value}>
                    {emailOption.label}
                  </option>
                ))}
              </select>
            </div>
            <button>
              <BiDownArrowAlt id="arrow_icon" />
              Download Report
            </button>
          </header>

          {/* First sales side chart */}
        </div>
        <div className="second_sales-section">
          {/* <section className="mainchart"> */}
            <div className="mainchart">
              
            <img src={chartImage}  alt=""/>
            </div>
            {/* </section> */}
          <div className="content">
            <p>
              KlashaWire - send <br />
              money to businesses <br />
              globally from Africa
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
