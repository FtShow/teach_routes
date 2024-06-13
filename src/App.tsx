import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {BrowserRouter, NavLink, Route, Routes, Navigate, Link} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import S from './Navstyles.module.css'


function App() {
    const NavActiveClass = ({isActive}: any) =>
        isActive ? S.activeNavLink : S.navLink
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink to={'/1'}  className={NavActiveClass}><div>PAGE ONE</div></NavLink>
                    <div><NavLink to={'/2'} className={NavActiveClass
                    }>PAGE TWO</NavLink></div>
                    <NavLink to={'/3'} className={NavActiveClass}><div>PAGE THREE</div></NavLink>
                </div>
                <div className={styles.content}>

                        <Routes>
                            <Route path={"/"}  element={<Navigate to={'/1'}/>} ></Route>
                            <Route path={"/1"} element={<PageOne/>}></Route>
                            <Route path={"/2"} element={<PageTwo/>}></Route>
                            <Route path={"/3"} element={<PageThree/>}></Route>
                            <Route path={"*"} element={<Error404/>}></Route>
                        </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
