import React from 'react';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg border-bottom fixed">
                <div class="container">
                    <a class="navbar-brand" style={{backgroundColor: "#ffffff"}} href="#"><img src="media/images/logo.png" alt="logo" style={{width: "30%"}}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Signup
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Doctor</a></li>
                                    <li><a class="dropdown-item" href="#">Patient</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Testimonials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;

