import { useContext } from "react";
import { myContext } from "./Main/Main";

const Three = () => {
    const style = useContext(myContext)
    return (
        <div style={style}>
            <h3>Three</h3>
        </div>
    );
};

export default Three;