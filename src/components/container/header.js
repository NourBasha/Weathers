import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    render() {
        return(
                
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

            // {/* <div class="container">
            //     <div class="row bg-dark">

            //         <div class="col-8 md-2">

            //                 <ul>
            //                     <li>
            //                         <Link to='/' >
            //                             Home
            //                        </Link>
            //                     </li>
            //                 </ul>
                            
            //         </div>
            //     </div>
              
            // </div> */}
        )
    }
}
export default Header;