/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Sidebar.css";
import logo from "../../assets/elogo.png";
import { Link } from "react-router-dom";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>e-dirr</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
         
          <a href="/">Dashboard</a>
          
        </div>
        <h2>insurance</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/healthinsurance">health insurance</a> 
         
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="/Educationinsurance">education insurance</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="/Eventinsurance">event insurance</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/Users">users</a>
        </div>
       
        <h2>debt</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">startup debt</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">material debt</a>
        </div>
       
        <h2>transaction</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">income</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">outsource</a>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;