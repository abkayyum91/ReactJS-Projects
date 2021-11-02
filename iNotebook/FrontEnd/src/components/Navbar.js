import React, { useEffect, useContext } from 'react'
import ButtonPrimary from './ButtonPrimary'
import { Link, useLocation } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'

const Navbar = () => {
    // using context
    const context = useContext(NoteContext);
    const { user, logOut } = context;

    // using react-router-dom hook
    let location = useLocation();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    const searchIput = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        // perform some action whenever location is changed
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navToggle">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact</Link></li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearchSubmit}>
                        <input className="form-control" onInput={searchIput} type="search" placeholder="Search" aria-label="Search" />
                        <ButtonPrimary msg="Search" mx="mx-2" />
                    </form>

                    {!user && <div className="login my-2 my-lg-0">
                        <Link className="btn btn-primary me-2" to="/signin" role="button">SignIn</Link>
                        <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
                    </div>}
                    {user && <div className="logout my-2 my-lg-0">
                        <button className="btn btn-primary me-2" onClick={logOut}>Logout</button>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
