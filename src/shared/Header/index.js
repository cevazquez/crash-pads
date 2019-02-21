import React from 'react';
import './Header.css';

export function Header() {
    return (
        <div className="clearfix homeBanner">
            {/* <section className="clearfix homeBanner"> */}
            <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
                <div className='container'>
                    <a className='navbar-brand text-uppercase' href='#'>Crash Pads</a>
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
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="bannerInfo">
                            <h1>This is the title.</h1>
                            <p>This app will eventually be something.</p>
                            <form className='form-inline'>
                                <input className='form-control search-bar' type='search' placeholder='ex. New York City' aria-label='Search'></input>
                                <button className='btn btn-outline-success my-2 my-sm-0 btn-search' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </div>
    )
}