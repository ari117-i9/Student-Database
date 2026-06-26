import logo from './logo.svg';
import './App.css';
import React from "react";
import { Nav, Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter as Router, Routes,
    Route, Link
} from "react-router-dom";
import AddStudent from
    "./Components/add-student.component";

function App() {
  return (
    <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/add-student"}
                                    className="nav-link">
                                    React MERN Stack App
                                </Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/add-student"}
                                        className="nav-link">
                                        Add Student
                                    </Link>
                                </Nav>
                            </Nav>           
                        </Container>
                    </Navbar>
                 </header>

                 <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Routes>
                                    <Route path="/" element={<AddStudent />} />
                                    <Route path="/add-student" element={<AddStudent />} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    </Router>             


  );
}

export default App;
