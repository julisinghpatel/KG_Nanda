import React from "react";
import {Navigate,Outlet} from "react-router-dom";
import {isAdminLoggedIn} from "./auth";
export default function ProtectedRoute(){return isAdminLoggedIn()?<Outlet/>:<Navigate to="/admin/login" replace/>}