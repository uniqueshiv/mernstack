import React, { useState,Fragment } from "react";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import "./app.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';

const App = () => {
  // const [users,setUsers] = useState([]);
  // const [user,setUser] = useState({});
  // const [loading,setLoading] = useState(false);
  const [alert,setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user:{},
  //   loading: false,
  //   alert:''
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false });
  // }

  //search github users



  //Set alert
  const showAlert = (msg, type) => {
    // this.setState({ alert:{ msg:msg,type:type } });

    setAlert({ msg:msg,type:type } );
    setTimeout(()=>{
      setAlert(null)
    },5000)

  }


  // render() {
    // const { users ,user, loading } = this.state;

    return (
      <GithubState>
      <Router>
        <div className="App ">
        <Navbar title="Github Finder" />
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact
             path="/"
             render={props =>(
              <Fragment>
                 <Search
                  setAlert = { showAlert }
                  />
                  <Users />
              </Fragment>
            )}/>
            <Route exact path='/about' component={About} />

            <Route exact

            path='/user/:login'
            render = { props => (
              <User
              {...props}
              />
            )} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  // }
}

export default App;
