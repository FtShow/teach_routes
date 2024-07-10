import React, {ReactNode} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";


export const PrivatRoutes = () => {
    const isAuth = false;
    return isAuth ? <Outlet/> : <Navigate to={'/login'}/>


};
