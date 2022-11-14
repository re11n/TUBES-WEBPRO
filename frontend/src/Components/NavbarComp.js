import React, {useEffect,useState } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Axios from "axios";


import Home from './Home';
import Tiket from './Tiket';
import Jadwal from './Jadwal';
import Login from './Login';
import Register from './Register';
import Aboutus from './Aboutus';
import CS from './CS';

const NavbarComp = () => {
    const [loginStatus, setLoginStatus] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => { 
          // eslint-disable-next-line
          if (response.data.LoggedIn == true){
            setLoginStatus(response.data.user[0].nama)
          } else {
            setLoginStatus("Login")
          }
        })
      }, []);
// eslint-disable-next-line
      if ({loginStatus} == "Login"){
        return (
            <Router>
                
                <div>

                    <Navbar bg="light" variant={"light"} expand="lg" fixed="top">
            <Navbar.Brand href="/home">
            <img
              alt=""
              src="https://i.pinimg.com/736x/2f/fc/b9/2ffcb91460d1d4b0d2ef8b3424b30779.jpg"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            New Shantika
          </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-left my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/tiket">Tiket</Nav.Link>
                                <Nav.Link as={Link} to="/jadwal">Jadwal</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/bantuan">Bantuan</Nav.Link>
                                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div>
                    <Switch>
                        <Route path="/tiket">
                            <Tiket />
                        </Route>
                        <Route path="/jadwal">
                            <Jadwal />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/Register">
                            <Register />
                        </Route> 
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    } else {
        return (
            <Router>
                
                <div>

                    <Navbar bg="light" variant={"light"} expand="lg" fixed="top">
            <Navbar.Brand href="/home">
            <img
              alt=""
              src="https://i.pinimg.com/736x/2f/fc/b9/2ffcb91460d1d4b0d2ef8b3424b30779.jpg"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            New Shantika
          </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-left my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/tiket">Tiket</Nav.Link>
                                <Nav.Link as={Link} to="/jadwal">Jadwal</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/bantuan">Bantuan</Nav.Link>
                                
                                <Nav.Link as={Link} to="/login">{loginStatus}</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div>
                    <Switch>
                        <Route path="/tiket">
                            <Tiket />
                        </Route>
                        <Route path="/jadwal">
                            <Jadwal />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/Register">
                            <Register />
                        </Route> 
                        <Route path="/about">
                            <Aboutus />
                        </Route> 
                        <Route path="/bantuan">
                            <CS />
                        </Route> 
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default NavbarComp;
