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
                  <h3 style={{fontFamily:"monospace",fontWeight:"10",margin:"1px",color:"#1f2638"}}> John Doe </h3>
                  <p style={{fontFamily:"monospace",margin:"5px",color:"#1f2638"}}> john@doe.com </p>
                </div>
                <img style={{height:"45px",width:"45px"}} src={face} alt="" />
              </div>
            </div>
            <div className="graphs-div">
          <Graph/>
          <PieChart/>
            </div>
            <div className="tables-div">
          <Table/>
            </div>
          </div>
      </div>
  );
}

export default App;
