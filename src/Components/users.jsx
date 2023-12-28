import React, { useEffect, useState } from 'react';
import Card from './UserCard';
import { getUsers } from '../userCRUD';
import { Link } from 'react-router-dom';
import styles from './dashboard.module.css';

const Users = ()=>{
const [users,setUser] = useState([]);

const loadUsers = async ()=>{
    const response = await getUsers();
    console.log(response);
    setUser(response);

}

useEffect(()=>{
    loadUsers();
},[])

return(
    <div><div className={styles.header}>
    <h1>&nbsp;Students</h1></div>
    <div style={{display:'flex',flexWrap:'wrap'}}>
            {users.map((user)=>(
                <div key={user.id}>
                    <div>
                     <Link to={`/users/${user.id}`} style={{textDecoration:'none',color:'blue'}}>
                    <Card 
                    AvatarUrl={user.AvatarUrl}
                    FirstName={user.FirstName}
                    skillset={user.skillset}
                    Address={user.Address}/>
                    </Link>
                    </div>
                </div>
            ))}
    </div>
    </div>
);
}


export default Users;
