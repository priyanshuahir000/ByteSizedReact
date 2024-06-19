const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" placeholder="Item..." />
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item i={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ i }) {
  return (
    <li>
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {i.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 You have X item on your list, and you have already packed X (X%)
      </em>
    </footer>
  );
}
export default App;
