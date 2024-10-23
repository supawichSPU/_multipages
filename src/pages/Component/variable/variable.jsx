import './variable.css'
function Variable(props) {

    return (
        <div className="variable-contrainer">
        <h3 className="variable-title">{props.name || "Variable"}</h3>
        <button id="minus" className="btn btn-danger" onClick={() => props.setValue(props.value - 1)}>&minus;</button>
        <span className="variable-value">
            {(props.type && props.type === 'int' ? props.value : props.value.toFixed(2))}
        </span>
        <button id="plus" className="btn btn-success" onClick={() => props.setValue(props.value + 1)}>+</button>
    </div>
    );
}
export default Variable;