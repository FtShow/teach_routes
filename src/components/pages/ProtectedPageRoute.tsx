import React, {ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";

type Props = {
    children: React.ReactNode | any
}
export const ProtectedPageRoute = ({children}: Props) => {
    const access = false;
    return access ? children : <Navigate to={'/error'}/>


};
