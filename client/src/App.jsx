import { useState } from 'react'
import axios from "axios";
import Table from "./components/Table/Table"
import PieChart from "./components/PieChart/PieChart"
import Graph from "./components/Graph/Graph"
import './App.css'
import SideBar from './components/SideBar/SideBar';

function App() {
    axios.defaults.baseURL = "http://localhost:3001";

  return (
    <>
    <div className='main-div'>
      <SideBar/>
      {/* <Table/>
      <PieChart/>
      <Graph/> */}
    </div>
    </>
  )
}

export default App
