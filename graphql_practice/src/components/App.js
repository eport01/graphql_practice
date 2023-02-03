import React, { useState, useEffect } from 'react'; 
import Users from './Users';
import User from './User';
import getData from '../apiCalls';
import { Routes, Route, NavLink } from 'react-router-dom'
import Header from './Header'

// class App extends React.Component {
  const App = () => {
  // constructor() {
  //   super()
  //   state = {
  //     selectedUser: null 
  //   }
  // }
  const [users, setUsers] = useState([])

  const initApp = async () => {
    const response = await getData()
    console.log('REPSONSE', response.data.users)
    setUsers(response.data.users)
  }

  useEffect(() => {
    initApp()
    console.log('DATA', users)
  }, [])

  const selectUser = (id) => {
    const selected = users.find(user => user.id === id)
  }

  // render(){
    return (
      <div className="container mx-auto px-4">
        {/* <Header /> */}
        <h1>Chore Chart </h1>
        <Routes>
          <Route path='/' element={ <Users users={users} selectUser={selectUser}/>}/>
          <Route path='/`${name}`' element={ <User selectUser={selectUser} />} />
        </Routes>
      </div>
    )
  // };
}

export default App;
