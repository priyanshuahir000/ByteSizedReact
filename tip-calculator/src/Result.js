export function Result({ bill, yourSatisfaction, friendSatisfaction }) {
  const avgSatisfaction = (yourSatisfaction + friendSatisfaction) / 2;
  const tip = (bill * avgSatisfaction) / 100;
  const total = bill + tip;
  return (
    <div className="result">{`You Pay $${total} ($${bill} + $${tip})`}</div>
  );
}
