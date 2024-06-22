export function Form({
  bill,
  setBill,
  yourSatisfaction,
  setYourSatisfaction,
  friendSatisfaction,
  setFriendSatisfaction,
}) {
  return (
    <form>
      <label htmlFor="value">How much was the bill?</label>
      <input
        id="value"
        type="text"
        value={bill ? bill : ""}
        onChange={(e) =>
          setBill(Number(e.target.value) ? Number(e.target.value) : null)
        }
        placeholder="Bill Amount"
      />
      <label htmlFor="you">How did you like the service?</label>
      <select
        id="you"
        value={yourSatisfaction}
        onChange={(e) => setYourSatisfaction(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely (20%)</option>
      </select>
      <label htmlFor="friend">How did your friend like the service?</label>
      <select
        id="friend"
        value={friendSatisfaction}
        onChange={(e) => setFriendSatisfaction(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely (20%)</option>
      </select>
      <button
        type="reset"
        onClick={() => {
          setBill(0);
        }}
      >
        Reset
      </button>
    </form>
  );
}
