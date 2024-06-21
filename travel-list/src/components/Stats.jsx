export default function Stats({ items }) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPackedItems / numItems) * 100) || 0;
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything 🎉! Ready to go ✈"
            : ` 💼 You have ${numItems} item on your list, and you have already packed ${numPackedItems} (${percentage})%`}
        </em>
      </footer>
    );
  }