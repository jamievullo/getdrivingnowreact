import React from 'react'
// import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import Form4 from '../components/Form4';
import Congratulations from '../components/Congratulations';
import AboutUs from '../components/AboutUs';
import FinancingFAQ from '../components/FinancingFAQ';
import axios from 'axios'
import brand from '../assets/Getdrivingnowcombrand.png'

class GDNNavbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            user: {}
        }
    } 
        //keep track of logged in status and request this information every time it’s mounted
    componentDidMount() {
        this.loginStatus()
    }

      //taking in login data recieved from server and setting state
    handleLogin = (data) => {
     // debugger
        // console.log(data.data.user)
        if (data.user) {
            // const user = data.user
            this.setState({
                isLoggedIn: true,
                user:  data.user
            })
            // this.dataOrigin(user)
        //     } else if (data.data.user) {
        //     const user = data.data.user
        //     // this.dataOrigin(user)
        // }
        // this.props.dispatch({ type: 'LOGIN_USER', payload: data.user })
        // this.setState({
        //    isLoggedIn: true,
        //    user: this.props.user
        // })
    }

     //helper function to overcome not setting state 2x in same function and to
     //also pass into conditional to check if the origin of the data is from the 
     //server(to check for login from session) or from user input.

    // dataOrigin = (user) => {
    //     // this.props.dispatch({ type: 'LOGIN_USER', payload: user})
    //     this.setState({
    //         isLoggedIn: true,
    //         user: this.props.user
    //     })
    }

      //on logout clears user state obj and toggles isLoggedIn obj to false
    handleLogout = () => {
        // this.props.dispatch({ type: 'LOGOUT_USER', payload: ''})
            this.setState({
            isLoggedIn: false,
            user: {}
        })
    }

    loginStatus = () => {
        //ajax call to sessions custom route
        axios.get('http://localhost:3001/logged_in',
        // This allows our Rails server to set and read the cookie on the front-end’s browser.
        {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.logged_in) {
                this.handleLogin(response)
            } else {
                this.handleLogout()
            }
        })
        .catch(error => console.log('api errors:', error))
        }

    handleLogoutClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
            this.handleLogout()
            // this.props.history.push('/')
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
            <div>
            <Router>
                <Container className="p-0" fluid={true} >
                    <Navbar className="navbar" expand="lg">
                        <Navbar.Brand>
                            <img src={brand} style={{height: "50px", width: "340px"}} alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/aboutUs'>About Us</Link>
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/form1'>Apply Now</Link>
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/financingFAQ'>FinancingFAQ</Link>
                                    <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                        <span className="mr-auto" style={{color: "black"}}>Account</span>
                                            } id="basic-dropdown">
                                        { 
                                        this.state.isLoggedIn ? 
                                        <NavDropdown.Item as={Link} to='/' onClick={this.handleLogoutClick}>
                                            Log Out
                                        </NavDropdown.Item> :
                                        <>
                                        <NavDropdown.Item as={Link} to='/login'>
                                            Log In
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/signup'>
                                            Create Account
                                        </NavDropdown.Item>
                                        </>
                                        }
                                    </NavDropdown>
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/'>Home</Link>

                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>

                        <Route exact path="/" component={Home} />
                        {/* <Route path="/login" component={Login} /> */}
                        <Route 
                            exact path='/login' 
                            render={props => (<Login {...props} 
                            handleLogin={this.handleLogin} 
                            loggedInStatus={this.state.isLoggedIn}/>)}
                        />
                        {/* <Route path="/signup" component={CreateAccount} /> */}
                        <Route 
                            exact path='/signup' 
                            render={props => (
                            <CreateAccount {...props} 
                                handleLogin={this.handleLogin} 
                                loggedInStatus={this.state.isLoggedIn}/>)}
                            />
                        <Route exact path="/form1" component={Form1} />
                        <Route path="/form2" component={Form2}/>
                        <Route path="/form3" component={Form3} />
                        <Route path="/form4" component={Form4} />
                        <Route path="/congratulations" component={Congratulations} />
                        <Route path="/aboutUs" component={AboutUs} />
                        <Route path="/financingFAQ" component={FinancingFAQ} />
                        <div style={{height: "50px"}}></div>
                    <Footer />
                </Container>
            </Router>
            </div>
        )
    }
}

export default GDNNavbar;
