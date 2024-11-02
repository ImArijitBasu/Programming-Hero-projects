import { useState } from "react";

const State_OnChange = () => {
  const [name, setName] = useState("arijit");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass.length < 6) {
      setError("password must be minimum 6 chars");
    } else {
      setError("");
      console.log(name);
      console.log(email);
      console.log(pass);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const style = {
    backgroundColor: "gray",
    border: "2px solid tomato",
    borderRadius: "12px",
    padding: "12px",
  };
  return (
    <div className="" style={style}>
      <h3>Using OnChange</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} value={name} type="text" name="name" />
        <br />
        <input onChange={handleEmail} type="email" name="email" />
        <br />
        <input onChange={handlePass} type="password" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default State_OnChange;
