import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sort, setSort] = useState("input");
  let sortedItems = items;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item i={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() =>
            window.confirm(
              "Are you sure you want to delete all of the items?"
            ) && setItems([])
          }
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
