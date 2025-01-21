import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users , setUser] = useState(loadedUsers)
    const handleDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert("deleted successfully")
                const remaining = users.filter(user => user._id !== id)
                setUser(remaining);
                console.log(users);
            }
        })
        // alert(id)
    }
    return (
        <div>
            fd
            <p>{users.length}</p>
            <div className="">
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button
                        onClick={()=>handleDelete(user._id)}
                    >X</button> </p>)
                }
            </div>
        </div>
    );
};

export default Users;