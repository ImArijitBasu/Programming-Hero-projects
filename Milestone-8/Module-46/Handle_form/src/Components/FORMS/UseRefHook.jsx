import { useEffect, useRef } from "react";

const UseRefHook = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
  };
  useEffect(()=>{
    nameRef.current.focus()
  } , [])





  const style = {
    backgroundColor: "gray",
    border: "2px solid tomato",
    borderRadius: "12px",
    padding: "12px",
  };
  return (
    <div>
      <div className="" style={style}>
        <h3>Using useRef</h3>
        <form onSubmit={handleSubmit}>
          <input ref={nameRef} type="text" name="name" />
          <br />
          <input ref={emailRef} type="text" name="email" />
          <br />
          <input ref={phoneRef} type="text" name="phone" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UseRefHook;
