import { useState } from "react";
import axios from "axios";
import SideBar from "./components/SideBar/SideBar";
import Graph from "./components/Graph/Graph";
import PieChart from "./components/PieChart/PieChart";
import Table from "./components/Table/Table";
import "./App.css";
import face from "../../UI/Assets/Rectangle 10.png";
import user from "../../UI/Assets/media.png";
import facebook from "../../UI/Assets/facebook.png";
import instagram from "../../UI/Assets/instagram.png";
import twitter from "../../UI/Assets/twitter.png";

function App() {
  axios.defaults.baseURL = "http://localhost:3001";

  return (
    <div className="main-div">
      <div className="side-bar-div">
        <SideBar />
      </div>
      <div className="section-part">
        <div className="nav-bar">
          <div className="greeting">
            <h2
              style={{
                margin: "0px",
                fontFamily: "monospace",
                fontWeight: "100",
                color: "#1f2638",
              }}
            >
              Good Morning! 🌞
            </h2>
          </div>
          <div className="profile-div">
            <div className="name">
              <h4
                style={{
                  fontFamily: "monospace",
                  fontWeight: "10",
                  margin: "1px",
                  color: "#1f2638",
                }}
              >
                {" "}
                John Doe{" "}
              </h4>
              <p
                style={{
                  fontFamily: "monospace",
                  margin: "1px",
                  color: "#1f2638",
                  fontSize: "12px",
                }}
              >
                {" "}
                john@doe.com{" "}
              </p>
            </div>
            <img style={{ height: "35px", width: "35px" }} src={face} alt="" />
          </div>
        </div>
        <div className="graphs-div">
          <div className="graph">
            <Graph />
          </div>
          <div className="chart">
            <PieChart />
          </div>
        </div>
        <div className="tables-div">
          <div className="table">
            <Table />
          </div>
          <div className="accounts">
            <div className="photo">
              <img src={user} alt="" />
            </div>
            <div className="texts">
              <h3 style={{ margin: "0" }}>John Doe</h3>
              <p style={{ fontWeight: "lighter" }}>CEO</p>
            </div>
            <div className="links">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
