import { useState } from 'react';
import './Country.css'
const Country = ({country, handleList}) => {
    const {name , cca3 , flags , population , area} = country;
    const {png} = flags

    const [visit , setVisit] = useState(false);
    const visitButton = () => {
        // setVisit(true)
        setVisit(!visit)
    }

    return (
        <div className={`country  ${ visit ? 'background' : 'none'}`}>
            <h2>Name: {name?.common}</h2>
            <h2>key: {cca3}</h2>
            <img src={png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            {/* <button onClick={()=>handleList(country.name.common)}>Add to LIST</button> */}
            <br /> <br />
            <button onClick={()=>{
               const handle = handleList(country.name.common);
               const handle2 =  visitButton();
               return (
                handle , handle2
               )
                }}>{ visit ? 'visited' : 'visit'}</button>
        </div>
    );
};

export default Country;