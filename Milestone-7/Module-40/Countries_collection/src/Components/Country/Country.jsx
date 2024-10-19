import './Country.css'
const Country = ({country}) => {
    const {name , cca3 , flags} = country;
    const {png} = flags
    return (
        <div className="country">
            <h2>Name: {name?.common}</h2>
            <h2>key: {cca3}</h2>
            <img src={png} alt="" />
        </div>
    );
};

export default Country;