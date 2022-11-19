import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserList from '../Components/UserList'

const ShowUsers = () => {
    const [userList,setUserList]=useState([]);
    const getData=()=>{
        axios.get("http://localhost:8080/user")
        .then((res)=>{
            console.log(res);
            setUserList(res.data)
        })
        
    }
    
    useEffect(() => {
    getData();
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <h1>The following is the list of Users:</h1>
        <table className='list-table'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        
        {userList.map((item,id)=>(
            <tr key={id}><UserList item={item}/></tr>
        ))}
        </table>
    </div>
  )
}

export default ShowUsers