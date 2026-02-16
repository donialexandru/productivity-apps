import { useState } from "react";

export default function Counter(props) {
  const [value, setValue] = useState(props.currentCount);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    props.onUpdate(props.id, newValue);
  };
  const decrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    props.onUpdate(props.id, newValue);
  };

  return (
    <div className="counter">
      <button className="btn-danger" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
      <h3 className="">{props.name}</h3>
      <span className="counter-value">{value}</span>
      <div className="counter-value-controls">
        <button className="btn-decrease" onClick={decrement}>
          −
        </button>
        <button className="btn-increase" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
