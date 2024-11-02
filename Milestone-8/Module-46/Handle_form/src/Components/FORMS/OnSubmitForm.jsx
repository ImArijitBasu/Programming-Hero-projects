
const OnSubmitForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    const style = {
        backgroundColor : 'gray',
        border : '2px solid tomato' , 
        borderRadius : '12px' , 
        padding : '12px',
    }
    return (
        <div className="" style={style}>
            <h3>Using OnClick</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="text" name="email"/>
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default OnSubmitForm;