import React from 'react';
import './header.css';

export function Header() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <div className='container'>
                    <a className='navbar-brand text-uppercase' href=''>Crash Pads</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                        <div className='navbar-nav ml-auto'>
                            <a className='nav-item nav-link active' href=''>Login<span className='sr-only'>(current)</span></a>
                            <a className='nav-item nav-link' href=''>Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='banner'>
                <form className='form-inline my-2 my-lg-0'>
                    <input className='form-control mr-sm-2 search-bar' type='search' placeholder='ex. New York City' aria-label='Search'></input>
                    <button className='btn btn-outline-success my-2 my-sm-0 btn-search' type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}