import { useState } from "react";
import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Healthinsurance from "./pages/Healthinsurance";
import Educationinsurance from "./pages/Educationinsurance";
import Eventinsurance from "./pages/Eventinsurance";
import Users from "./pages/user"
const App = () => {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
      <BrowserRouter>
      <Route exact path="/">
           <Main/>
      </Route>
      </BrowserRouter>
  

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
      <BrowserRouter>
      <Route path="/Healthinsurance">
           <Healthinsurance/>
      </Route>
      </BrowserRouter>
  

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
       <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
      <BrowserRouter>
      <Route path="/Educationinsurance">
           <Educationinsurance/>
      </Route>
      </BrowserRouter>
  

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
      <BrowserRouter>
      <Route path="/Eventinsurance">
           <Eventinsurance/>
      </Route>
      </BrowserRouter>
  

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> 
      <BrowserRouter>
      <Route path="/Users">
           <Users/>
      </Route>
      </BrowserRouter>
  

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
       
     
      
    </div>
   
  );
}







export default App;