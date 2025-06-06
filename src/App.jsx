import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Order";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-contain">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add/>} />
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default App;
