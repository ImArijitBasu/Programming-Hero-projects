import Watch from "./Watch";
import { useState , useEffect } from "react";
const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("/watchList.json") 
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <div>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}
    </div>
  );
};

export default Watches; 
