import React, { Component } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Tiket from './Tiket';
import Jadwal from './Jadwal';
import Login from './Login';
import Register from './Register';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">New Shantika</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/tiket">Tiket</Nav.Link>
                                <Nav.Link as={Link} to="/jadwal">Jadwal</Nav.Link>
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
    }
}
