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
    <div className="">
      <button className="" onClick={() => onDelete(id)}>
        Delete
      </button>
      <h3 className="">{name}</h3>
      <div className="">
        <button className="" onClick={decrement}>
          −
        </button>
        <span className="">{value}</span>
        <button className="" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
