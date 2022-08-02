import { useState } from 'react';
export default function Userlist() {

  const [user, setUser] = useState([]);

  const getAllUsers = () => {
    fetch('http://localhost:8080/user/findall')
      .then(data => data.json())
      .then(data=>setUser(data))
  }
  return (
    <div>
      <h3>Library Customers</h3>
      <ul>
        {user.map(row => {
          return (<li>{row.name}</li>)
        })}
      </ul>
      <button onClick={getAllUsers}>Get Users</button>
    </div>
  )
}