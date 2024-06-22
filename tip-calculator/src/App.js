import { useState } from "react";
import "./styles.css";
import { Result } from "./Result";
import { Form } from "./Form";
import { Heading } from "./Heading";

function App() {
  const [bill, setBill] = useState(null);
  const [yourSatisfaction, setYourSatisfaction] = useState(null);
  const [friendSatisfaction, setFriendSatisfaction] = useState(null);

  return (
    <div className="container">
      <Heading />
      <Form
        bill={bill}
        setBill={setBill}
        yourSatisfaction={yourSatisfaction}
        setYourSatisfaction={setYourSatisfaction}
        friendSatisfaction={friendSatisfaction}
        setFriendSatisfaction={setFriendSatisfaction}
      />
      {bill > 0 && (
        <Result
          bill={bill}
          setBill={setBill}
          yourSatisfaction={yourSatisfaction}
          setYourSatisfaction={setYourSatisfaction}
          friendSatisfaction={friendSatisfaction}
          setFriendSatisfaction={setFriendSatisfaction}
        />
      )}
    </div>
  );
}
export default App;
