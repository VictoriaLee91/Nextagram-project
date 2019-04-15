import React from 'react';
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import NavBarLink from './Components/NavBar';
import UserProfilePage from './pages/UserProfilePage';
import './App.css';
import axios from 'axios';
import MyProfilePage from './pages/MyProfilePage';
//import Spinner from './Components/spinner';

class App extends React.Component {
  state = {
    users: [],
    loading: true,
    currentUser: null,
    me: [],
  }
  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        const users = result.data;
        this.setState({
          users: users
        })
      })
      .catch(error => {
        console.log('ERROR:', error)

      })
  }
  setUser = () => {
    const currentUser = localStorage.getItem('jwt');
    if (currentUser) {
      this.setState({
        currentUser: currentUser
      });
    } else {
      this.setState({
        currentUser: null,
      })
    }
  }
  render() {

    return (
      <>
        <div>

          <NavBarLink currentUser={this.state.currentUser} setUser={this.setUser} />
        </div>

        <div>

          <Route exact path="/" component={props => {
            return (
              <HomePage users={this.state.users} {...props} />
            )
          }} />
          <Route path="/users/:id" render={props => {
            return (
              <UserProfilePage users={this.state.users} {...props} />
            )
          }} />

          < Route exact path="/profile" component={props => {
            return (
              <MyProfilePage me={this.state.me} {...props} />
            )
          }} />
        </div>


      </>
    )
  }
}


export default App;
