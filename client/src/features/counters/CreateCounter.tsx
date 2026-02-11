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
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Counter name..."
        className=""
      />

      <input
        type="number"
        value={targetCounter}
        onChange={(e) => setTargetCounter(e.target.value)}
        placeholder="Target counter"
        className=""
      />
      <button type="submit" className="">
        + Add Counter
      </button>
    </form>
  );
}
