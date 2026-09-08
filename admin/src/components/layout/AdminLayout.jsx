import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import Navbar from "../Admin/Navbar";
import "./layout.css";
export default function AdminLayout(){return <div className="admin-shell"><Sidebar/><div className="admin-main"><Navbar/><main className="admin-content"><Outlet/></main></div></div>}