import { useState } from "react";

export default function CreateCounter({ onCreate }) {
  const [name, setName] = useState("");
  const [targetCounter, setTargetCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      onCreate({ name: trimmedName, targetCounter: targetCounter });
      setName("");
      setTargetCounter(0);
    }
  };

  return (
    <div className="create-counter">
      <form onSubmit={handleSubmit} className="create-form">
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Counter name..."
        />

        <input
          className="input"
          type="number"
          value={targetCounter}
          onChange={(e) => setTargetCounter(e.target.valueAsNumber)}
          placeholder="Target counter"
        />
        <button type="submit" className="btn">
          + Add Counter
        </button>
      </form>
    </div>
  );
}
