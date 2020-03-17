import React from 'react'
import style from './NavBar.module.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
function NavBar(){
    return(
            <div className={style.NavBar}>
                <Link to="/">To Do</Link>
                <Link to="/done">Done</Link>
            </div>       
    )
}
export default NavBar