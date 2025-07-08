import React from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import {
    LazyPage1,
    LazyPage2,
    LazyPage3
} from '../01-lazyload/pages'

const Navigation = () => {
    const checkIfActive = ({isActive}: any) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo'/>
                    <ul>
                        <li>
                            <NavLink 
                                to='/lazy1'
                                className={checkIfActive}
                            >
                                Lazy 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/lazy2'
                                className={checkIfActive}
                            >
                                Lazy 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/lazy3'
                                className={checkIfActive}
                            >
                                Lazy 3
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='lazy1' element={<LazyPage1/>}/>
                    <Route path='lazy2' element={<LazyPage2/>}/>
                    <Route path='lazy3' element={<LazyPage3/>}/>
                    <Route path='/*' element={<Navigate to='/lazy1' replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
