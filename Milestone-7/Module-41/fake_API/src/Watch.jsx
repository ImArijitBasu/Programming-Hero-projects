

const Watch = ({ watch }) => {
    const { brand, price , color} = watch;
    const style = {
        border: '2px solid tomato',
        margin : '10px 0px',
        borderRadius : '15px'
    }
  return (
    <div style={style}>
      <h2>Watch: {brand}</h2>
      <h3>Price: ${price}</h3>
      <p>Color: {color}</p>
    </div>
  );
};

export default Watch;
