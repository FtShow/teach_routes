import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {BrowserRouter, NavLink, Route, Routes, Navigate, Link} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import S from "./Navstyles.module.css"

import styled from "styled-components";
const NavWrapper = styled.div`
margin-left: 10px;
  font-size: 20px;
  & > a {
    text-decoration: none;
    color: #282c34;
  }
  & > a.active{
    color: #7fb8f1;
    text-decoration: underline;
  }
`
const navLink = styled.div`
  text-decoration: none;
  color: #282c34;
`
const activeNavLink = styled.div`
  color: #7fb8f1;
  text-decoration: underline;
`


function App() {
    const NavActiveClass = ({isActive}: any) =>
        isActive ? S.activeNavLink : S.navLink
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink to={'/1'} >PAGE ONE</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={'/2'} >PAGE TWO</NavLink></NavWrapper>
                    <NavLink to={'/3'} className={NavActiveClass}><NavWrapper>PAGE THREE</NavWrapper></NavLink>
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
