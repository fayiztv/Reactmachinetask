import React from "react";
import "./sideBar.css";
import image from "../../../../UI/Assets/Briefcase.png";
import image2 from "../../../../UI/Assets/StatBoard.png";
import menu from "../../../../UI/Assets/Circled Menu.png";
import support from "../../../../UI/Assets/Support.png";
import plugines from "../../../../UI/Assets/Puzzle.png";
import help from "../../../../UI/Assets/Help.png";

function SideBar({ page }) {
  return (
    <div className="side-bar-main">
      <div className="image-column">
        <img src={image} alt="" />
        <img src={image2} alt="" />
      </div>
      <div className="links-column">
        <a href="/">
          <div className={`side-item ${page === "dashboard" && "active"}`}>
            <img src={menu} alt="" />
            <span>Dashboard</span>
          </div>
        </a>
        <a href="/">
          <div className={`side-item ${page === "Support" && "active"}`}>
            <img src={support} alt="" />
            <span>Support</span>
          </div>
        </a>
        <a href="/">
          <div className={`side-item ${page === "plugines" && "active"}`}>
            <img src={plugines} alt="" />
            <span>Plugines</span>
          </div>
        </a>
        <a href="/">
          <div className={`side-item ${page === "help" && "active"}`}>
            <img src={help} alt="" />
            <span>Help</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
