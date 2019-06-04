import React from 'react';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      nameArr: [],
      filterName: '',
      // collapsibleId: null,
      eyePassword: 'password',
      token: JSON.parse(localStorage.getItem('token')) || '',
      isAuthenticated: false,
      isErrorVisible: false
    };

    this.valueInputEmail = '';
    this.valueInputPassword = '';

    this.handleFilter = this.handleFilter.bind(this);
    // this.handleCollapsible = this.handleCollapsible.bind(this);
    this.handleEyePassword = this.handleEyePassword.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleFilter(event) {
    const currentValue = event.currentTarget.value;
    this.setState({ filterName: currentValue, collapsibleId: null });
    if (currentValue.length >= 3) {
      this.getUsers(currentValue);
    }
  }

  // handleCollapsible(event) {
  //   const newCollapsibleId = event.currentTarget.id;
  //   this.setState(prevState => {
  //     if (parseInt(newCollapsibleId) === prevState.collapsibleId) {
  //       return { collapsibleId: null };
  //     } else {
  //       return { collapsibleId: parseInt(newCollapsibleId) };
  //     }
  //   });
  // }

  handleEyePassword() {
    this.setState(prevState => ({
      eyePassword:
        prevState.eyePassword === 'password' ? 'text' : 'password'
    }));
  }

  handleInputEmail(event) {
    this.valueInputEmail = event.currentTarget.value;
    this.setState({
      user: {
        email: this.valueInputEmail,
        password: this.valueInputPassword
      }
    });
  }

  handleInputPassword(event) {
    this.valueInputPassword = event.currentTarget.value;
    this.setState({
      user: {
        email: this.valueInputEmail,
        password: this.valueInputPassword
      }
    });
  }

  onSubmit = event => {
    event.preventDefault();
    fetch('https://whoiswho.vass.es/api/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const dataToken = data.user.token;
        if (dataToken !== '') {
          this.setState({ isAuthenticated: true, token: dataToken });
          localStorage.setItem('token', JSON.stringify(dataToken));
        }
      })
      .catch(error => this.setState({isErrorVisible: true}))
  };

  getUsers(filterName) {
    fetch(`https://whoiswho.vass.es/api/employees?cn=${filterName}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${this.state.token}`,
        'content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(users => this.setState({ nameArr: users }));
  }

  render() {
    const { nameArr, filterName, eyePassword, isErrorVisible } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            this.state.isAuthenticated === true ? (
              <Redirect from="/" to="/search" />
            ) : (
              <Login
                handleEyePassword={this.handleEyePassword}
                eyePassword={eyePassword}
                handleInputEmail={this.handleInputEmail}
                handleInputPassword={this.handleInputPassword}
                onSubmit={this.onSubmit}
                isErrorVisible = {isErrorVisible}
              />
            )
          }
        />
        <Route
          path="/search"
          render={() => (
            this.state.token === '' ? (
              <Redirect from="/search" to="/" />
              )
            : ( 
            <Search
              filterName={filterName}
              nameArr={nameArr}
              handleFilter={this.handleFilter}
            />
            )
          )}
        />
      </Switch>
    );
  }
}

export default App;
