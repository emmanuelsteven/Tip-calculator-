import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );

  function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
      setBill("");
      setPercentage1(0);
      setPercentage2(0);
    }
    return (
      <div>
        <Bill bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
          {" "}
          How did you like the service{" "}
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
          How did your friend like the service
        </SelectPercentage>
        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    );
  }

  function Bill({ bill, onSetBill }) {
    return (
      <div>
        <label>How much was the bill?</label>
        <input
          type="text"
          placeholder="bill value"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </div>
    );
  }

  function SelectPercentage({ children, percentage, onSelect }) {
    return (
      <div>
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">good(5%)</option>
          <option value="10">satisfied(10%)</option>
          <option value="20">very satisfied(20%)</option>
        </select>
      </div>
    );
  }

  function Output({ bill, tip }) {
    return (
      <p>
        you pay ${bill + tip} (${bill} + ${tip} Tip)
      </p>
    );
  }

  function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
}
