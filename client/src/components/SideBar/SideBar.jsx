import React from "react";
import "./sideBar.css";
import image from "../../../../UI/Assets/Briefcase.png";
import image2 from "../../../../UI/Assets/StatBoard.png";
import menu from "../../../../UI/Assets/Circled Menu.png";
import support from "../../../../UI/Assets/Support.png";
import plugines from "../../../../UI/Assets/Puzzle.png";
import help from "../../../../UI/Assets/Help.png";
import logout from "../../../../UI/Assets/Shutdown.png";

function SideBar() {
  return (
    <div className="side-bar-main">
      <div className="image-column">
        <img src={image} alt="" />
        <img src={image2} alt="" />
      </div>
      <div className="links-column">
        <a href="/">
          <div style={{backgroundColor:"white",color:"black"}} className={`side-item`}>
            <img src={menu} alt="" />
            <span>Dashboard</span>
          </div>
        </a>
        <a href="support">
          <div className={`side-item`}>
            <img src={support} alt="" />
            <span>Support</span>
          </div>
        </a>
        <a href="/plugines">
          <div className={`side-item`}>
            <img src={plugines} alt="" />
            <span>Plugines</span>
          </div>
        </a>
        <a href="/help">
          <div className={`side-item`}>
            <img src={help} alt="" />
            <span>Help</span>
          </div>
        </a>
      </div>
      <div className="logout">
        <button className="btn">
          Logout
        <img style={{marginLeft:"10px",marginBottom:"-2px"}} src={logout} alt="" />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
