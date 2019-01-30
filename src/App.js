import React, { Component } from 'react';
import './App.css';
//import APIUrl from './helpers/environment'  //import this and add/replacing with localhost 
import Auth from './components/auth/Auth';
// import Movies from './components/movies/Movies';
// import Shows from './components/shows/Shows';
import Collector from './components/Home/Collector'
import Sitebar from './components/Home/Navbar';
//import MovieTable from './components/movies/MovieTable';
import Footer from './components/Home/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }
  
  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

logout = () => {
  this.setState({
    sessionToken: '',
  });
  localStorage.clear();
}


protectedViews = () => { // it checks to see of you are logged in
  if (this.state.sessionToken === localStorage.getItem('token')) {
    console.log(this.props.sessionToken)
    return (
      <Switch>
        <Route path='/' exact>
        {/* <Movies token={this.props.sessionToken}/> */}
        {/* <Shows token={this.props.sessionToken}/> */}
        <Collector />
        </Route>
      </Switch>
    )
  } else { //if you are not logged in it returns the auth.js
    return (
      <Route path="/">
      <Auth setToken={this.setSessionState}/>
      </Route>
    )
  }
}


  render() {
    return (
      <Router>
      <div>
        <Sitebar />
        {this.protectedViews()}
        <footer><Footer /></footer>
      </div>
      </Router>
    );
  }
}

export default App;
