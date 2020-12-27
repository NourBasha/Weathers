import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return(
                
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid"> 
                    <a className="navbar-brand brand-name" href="/">Weathers</a>             
                        <div className="expand navbar-expand mr-auto">
                                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link active home-item" >                                         
                                                Home 
                                            </Link>                                     
                                        </li>
                                 </ul>
                        </div>
                                     
                    </div>
                </nav>
            </div>

        )
    }
}
export default Header;