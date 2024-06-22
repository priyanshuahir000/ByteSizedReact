export function Button({ bg, color, onClick, children }) {
  return (
    <button style={{ backgroundColor: bg, color: color }} onClick={onClick}>
      {children}
    </button>
  );
}
