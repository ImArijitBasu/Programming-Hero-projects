import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const nav = useNavigate();
    const user = useLoaderData();
    console.log(user);
    const handleGoBack = () => {
        nav(-1);
    }
    return (
        <div>
            <h2>personal users section</h2>
            <h3>Title : {user.title}</h3>
            <p>{user.body}</p>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default UserDetails;