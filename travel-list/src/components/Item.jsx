export default function Item({ i, setItems }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={i.packed}
          onChange={() => {
            setItems((prevItems) => {
              return prevItems.map((item) =>
                item.id === i.id ? { ...item, packed: !item.packed } : item
              );
            });
          }}
        />
        <span style={i.packed ? { textDecoration: "line-through" } : {}}>
          {i.quantity} {i.description}
        </span>
        <button
          onClick={() => {
            setItems((prevItems) => prevItems.filter((item) => item.id !== i.id));
          }}
        >
          ❌
        </button>
      </li>
    );
  }