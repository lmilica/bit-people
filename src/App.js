import React from 'react';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Users from "./components/Users/Users.js"
import SearchBar from './components/SearchBar/SearchBar.js';
import { fetchUsers } from './functions.js';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      allUsers: [],
      filteredUsers: [],
      isListView: JSON.parse(localStorage.getItem('isListView')),
    }

    this.changeViewMode = this.changeViewMode.bind(this)
    this.onSearchingUsers = this.onSearchingUsers.bind(this)
  }



  componentDidMount() {
    if (localStorage.getItem('users')) {
      const users = JSON.parse(localStorage.getItem('users'));
      this.setState({
        filteredUsers: users,
        allUsers: users
      })
    } else {
      this.getUsers()
    }

  }


  getUsers() {
    fetchUsers()
      .then(data => {
        this.setState({
          allUsers: data.results,
          filteredUsers: data.results
        }, () => localStorage.setItem('users', JSON.stringify(data.results)))
      })
  }

  onSearchingUsers = (searchQuery) => {
    const filteredUsers = this.state.allUsers.filter(element => {
      if (element.name.first.toLowerCase().includes(searchQuery.toLowerCase())
        || element.name.last.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true
      }

      return false;
    })

    this.setState({ filteredUsers })
  }

  changeViewMode = () => {
    this.setState({ isListView: !this.state.isListView },
      () => { localStorage.setItem('isListView', this.state.isListView) })

  }

  render() {

    return (
      <div >
        <Header changeView={this.changeViewMode} isListView={this.state.isListView} refreshUsers={() => this.getUsers()} />
        <SearchBar onChange={this.onSearchingUsers} />
        <Users
          isListView={this.state.isListView}
          searchState={this.inputValue}
          filteredUsers={this.state.filteredUsers}
          allUsers={this.state.allUsers} />
        <Footer />
      </div>
    );
  }

}

export default App;
