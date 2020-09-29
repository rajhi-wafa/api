import React, { useEffect,useState } from 'react';
import UserCard from "./components/UserCard"
import './App.css';
import { Container,Row } from 'reactstrap';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => setUsers(json))

  },[])
  return (
    <div className="App">
    <Container className="d-flex">
      <Row>
        {users.map((user,i)=>(
  <UserCard key={i} user={user}/>
))}
</Row>
</Container>
</div>

      




  
  );
}

export default App;
