import One_One from "./One_One";
import One_Two from "./One_Two";

const One = () => {
  return (
    <div>
      <h3>One</h3>
      <div className="flex">
        <One_One></One_One>
        <One_Two></One_Two>
      </div>
    </div>
  );
};

export default One;
