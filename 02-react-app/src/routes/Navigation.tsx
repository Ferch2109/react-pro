import { Suspense } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

const Navigation = () => {
    const checkIfActive = ({isActive}: any) => isActive ? 'nav-active' : '';

    return (
        // Lets you display a fallback until its children have finished loading.
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React logo'/>
                        <ul>
                            {routes.map(({to, path, name}) => (
                                <li key={`nav-li-${path}`}>
                                    <NavLink 
                                        to={to}
                                        className={checkIfActive}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({path, Component}) => (
                            <Route 
                                key={`route-${path}`}
                                path={path} 
                                element={<Component/>}
                            />
                        ))}
                        <Route path='/*' element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default Navigation
