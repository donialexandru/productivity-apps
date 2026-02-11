import { useState } from "react";

export default function Counter({
  id,
  name,
  currentCount,
  onUpdate,
  onDelete,
}) {
  const [value, setValue] = useState(currentCount);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onUpdate(id, newValue);
  };
  const decrement = () => {
    const newValue = value - 1;
    setValue(newValue);
    onUpdate(id, newValue);
  };

  return (
    <div className="counter">
      <button className="btn-danger" onClick={() => onDelete(id)}>
        Delete
      </button>
      <h3 className="">{name}</h3>
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
