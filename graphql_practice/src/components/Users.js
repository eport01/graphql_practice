import React from 'react';
import User from './User';
import { useQuery, gql } from '@apollo/client';
// import gql from 'graphql-tag';
// import UserAvatar from './UserAvatar';
// import CreateUser from './CreateUser';

const GET_USER = gql `
{
  users {
    id
    name
    email
    postsCount
  }
}
`;

// function Users({ selectUser }) {
//   const { loading, error, data} = useQuery(GET_USERS)

//   if (loading) return 'Loading...';
//   if (error) return `Error ${error.message}`;

//   return(
//     <div className = "flex flex-wrap items-center pb-16">
//       {data.users.map(user => {
//         <div key = {user.id} className="lg:w-1/3 w-full p-4 text-center inline" onClick= "{selectUser.bind(this, user)}">
//           <UserAvatar user = {user} />
//         </div> 
//       }
//         )}
//     </div>
//   )
// }

const Users = (props) => {
  console.log('USERSSSSS', props)
  const userData = props.users.map(user => {
    console.log('USER', user)
    return (<User 
      key={user.id}
      id={user.id}
      name={user.name}
      email={user.email}
      selectUser={props.selectUser}
    />)
  })
  return(
    <div>
      {userData}
    </div>
  )

}

export default Users; 