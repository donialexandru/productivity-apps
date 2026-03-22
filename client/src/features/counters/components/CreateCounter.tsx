import { useState, type ComponentPropsWithoutRef } from "react";
import { type CreateCounterInput, type Counter } from "shared";

type CounterName = Counter["name"];

interface CreateCounterProps extends ComponentPropsWithoutRef<"form"> {
  onCreate: ({ name, targetCount }: CreateCounterInput) => void;
}

export default function CreateCounter({ onCreate }: CreateCounterProps) {
  const [name, setName] = useState<CounterName>("");
  const [targetCount, setTargetCounter] = useState(0);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName) {
      onCreate({ name: trimmedName, targetCount: targetCount });
      setName("");
      setTargetCounter(0);
    }
  };

  return (
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
        value={targetCount}
        onChange={(e) => setTargetCounter(e.target.valueAsNumber)}
        placeholder="Target counter"
      />
      <button type="submit" className="btn">
        + Add Counter
      </button>
    </form>
  );
}
