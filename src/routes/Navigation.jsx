import {Suspense} from 'react'
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route , Navigate} from "react-router-dom";
import { routers } from '../Lazyload/router/routes';
import logo from '../logo.svg'

export const Navigation = () => {
  //hay que poner suspence para usar las lazy
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
            <img src={logo} alt="React Logo" />     
        <ul>
          {
            routers.map(({to, name}) =>(
              <li key={to}>
                <NavLink
                 to={to}>
                  {name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        </nav>
        <Routes>
          {
            routers.map(route =>(
              <Route
              key={route.to}
              path={route.path}
              element={<route.Component/> }
              />
            ))
          }
          <Route path='/*' element={<Navigate to={routers[0].to} replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  )
  //el replace es para que no vueva hacia atras
}
