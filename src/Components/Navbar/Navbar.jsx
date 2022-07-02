import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { toggleAuth } from '../../Redux/Login/action';

function Navbar() {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(toggleAuth());
    }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/bookings">Bookings</Link>
        {
            !isLoggedIn ? (<Link to="/login">Login</Link>) : <button onClick={handleLogout}>Logout</button>
        }
    </div>
  )
}

export default Navbar