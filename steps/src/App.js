import { useState } from "react";
import { Button } from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 && "active"}`}>1</div>
        <div className={`${step >= 2 && "active"}`}>2</div>
        <div className={`${step >= 3 && "active"}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <Button bg="#7950f2" color="#fff" onClick={handlePrevious}>
          <span>👈</span>Prev
        </Button>
        <Button bg="#7950f2" color="#fff" onClick={handleNext}>
          Next<span>👉</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
