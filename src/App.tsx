import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles'


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PAGE5: '/ProtectedPage'

} as const

function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Prices</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE5}>ProtectedPage</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>BACK</button>
                        <NavLink onClick={navigateHandler} className={styles.LinkLikeButton}
                                 to={PATH.PAGE1}>HOME</NavLink>

                    </div>

                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    /!*<Route path={'/adidas/:id'} element={<Model/>}/>*!/*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}

                    {/*    /!*<Route path={'/page/error'} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*!/*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



