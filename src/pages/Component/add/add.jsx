import { useEffect, useState } from "react";
import Variable from "../variable/variable";
import './add.css'
function Addvalue({aValue,bValue,}) {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0)

    useEffect(() =>{
        setA(aValue || 0)
        setB(bValue || 0)
    },[aValue,bValue])

    return (
        <div className="add-contrainer">
            <h3 className="add-title">Add</h3>
            <h2 className="add-display">
                <span className="badge bg-primary">A={a}</span>
                <span className="badge bg-info">A+B={a + b}</span>
                <span className="badge bg-primary">B={b}</span>
            </h2>
            <div className="add-variable">
                <Variable type={"int"} name={"A"} value={a} setValue={setA} />
                <Variable type={"int"} name={"B"} value={b} setValue={setB} />
            </div>
        </div>
    );
}

export default Addvalue;