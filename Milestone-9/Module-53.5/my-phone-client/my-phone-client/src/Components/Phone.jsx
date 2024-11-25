import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone);
    return (
        <div>
            single phone
            <h2>{phone.name}</h2>
            <p>{phone.description}</p>
        </div>
    );
};

export default Phone;