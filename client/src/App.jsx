import { useState } from "react";
import axios from "axios";
import SideBar from "./components/SideBar/SideBar"
import Graph from "./components/Graph/Graph"
import PieChart from "./components/PieChart/PieChart"
import Table from "./components/Table/Table"
import "./App.css";
import face from "../../UI/Assets/Rectangle 10.png"

function App() {
  axios.defaults.baseURL = "http://localhost:3001";

  return (
      <div className="main-div">
        <div className="side-bar-div">
          <SideBar/>
        </div>
          <div className="section-part">
            <div className="nav-bar">
              <div className="greeting">
              <h2 style={{margin:"0px",fontFamily:"monospace",fontWeight:"100",color:"#1f2638"}}>Good Morning! 🌞</h2>
              </div>
              <div className="profile-div">
                <div className="name">
                  <h4 style={{fontFamily:"monospace",fontWeight:"10",margin:"1px",color:"#1f2638"}}> John Doe </h4>
                  <p style={{fontFamily:"monospace",margin:"1px",color:"#1f2638",fontSize:"12px"}}> john@doe.com </p>
                </div>
                <img style={{height:"35px",width:"35px"}} src={face} alt="" />
              </div>
            </div>
            <div className="graphs-div">
              <div className="graph">
          <Graph/>
              </div>
              <div className="chart">
          <PieChart/>
              </div>
            </div>
            <div className="tables-div">
          <Table/>
            </div>
          </div>
      </div>
  );
}

export default App;
