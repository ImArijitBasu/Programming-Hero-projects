import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userData = useLoaderData()
    // alert(userData.name);

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target ;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name , email}

        fetch(`http://localhost:5000/users/${userData._id}`,{
            method: "PUT",
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated successfully')
            }
        })
    }
    return (
        <div>
            <p>{userData.name}</p>
            <form onSubmit={handleUpdate} action="">
                <input type="text" name="name" id="" defaultValue={userData?.name} /> <br />
                <input type="text" name="email" id="" defaultValue={userData?.email} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;