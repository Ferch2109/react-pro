import React from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router'
import logo from '../logo.svg'
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';

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
                                to='../home'
                                className={checkIfActive}
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='../about'
                                className={checkIfActive}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='../users'
                                className={checkIfActive}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='about' element={<h1>About Page</h1>}/>
                    <Route path='users' element={<h1>Users Page</h1>}/>
                    <Route path='home' element={<ShoppingPage/>}/>
                    <Route path='*'>
                        <Route path='*' element={<Navigate to='home'/>}/>
                    </Route>
                    
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation