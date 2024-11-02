
import useInputChange from "../CustomHook/useHandleChange";

const State_CustomHookChange = () => {
    // const [name , setName] = useInputChange('')
    const nameChange = useInputChange('')
    const mailChange = useInputChange('')
    const passChange = useInputChange('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameChange.value);
        console.log(mailChange.value);
        console.log(passChange.value);
    }
    
  const style = {
    backgroundColor: "gray",
    border: "2px solid tomato",
    borderRadius: "12px",
    padding: "12px",
  };
  return (
    <div>
      <div className="" style={style}>
        <h3>Using OnClick</h3>
        <form onSubmit={handleSubmit}>
          {/* <input value={name} onChange={setName} type="text" name="name" /> */}
          <input {...nameChange} type="text" name="name" />
          <br />
          <input {...mailChange} type="text" name="email" />
          <br />
          <input {...passChange} type="text" name="phone" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default State_CustomHookChange;
