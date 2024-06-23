import { Button } from "./Button";
import { useState } from "react";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendsExpense = billValue ? billValue - userExpense : "";

  function handleSplit(e) {
    e.preventDefault();

    if (!billValue) return;
    onSplitBill(whoIsPaying === "user" ? friendsExpense : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>{`Split a bill with ${selectedFriend.name}`}</h2>
      <label>💰 Bill Value </label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={userExpense}
        onChange={(e) => {
          setUserExpense(
            Number(e.target.value) > billValue
              ? billValue
              : Number(e.target.value)
          );
        }}
      />

      <label>{`👬 ${selectedFriend.name}'s expense`}</label>
      <input type="number" disabled value={friendsExpense} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => {
          setWhoIsPaying(e.target.value);
        }}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
