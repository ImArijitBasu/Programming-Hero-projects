import { useContext } from 'react';
import { myContext } from './Main/Main';

const One_One_One = () => {
    const myStyle = useContext(myContext);
    return (
        <div style={myStyle}>
            <h5>One_One_One</h5>
            
        </div>
    );
};

export default One_One_One;