import { useState, useEffect } from "react";
import ChartData from "../../components/chart/ChartData";
import MainChart from "../../components/chart/MainChart";
import SmallChart from "../../components/chart/SmallChart";
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
    { value: "default", label: " " },
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
        <div className="first_sales-section" >
        <header>
          <h2>Sales</h2>
          <p>7 days</p>
          <p>30 days</p>
          <div>
            <select
              id="dropdown"
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
          <div>
            <select
              id="dropdown"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              {emailOptions.map((emailOption) => (
                <option key={emailOption.value} value={emailOption.value}>
                  {emailOption.label}
                </option>
              ))}
            </select>
          </div>
          <button>Download Report</button>
        </header>

        {/* First sales side chart */}

        <section>
          <MainChart/>
        </section>
        </div>
        
      </section>
    </div>
  );
};

export default Dashboard;
