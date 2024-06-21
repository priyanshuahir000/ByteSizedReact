import{ useState } from "react";

export default function Form({ setItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    function handleSubmit(e) {
      e.preventDefault();
  
      function addItem(item) {
        setItems((prevItems) => [...prevItems, item]);
      }
  
      if (!description) {
        return;
      }
      const newItem = {
        id: Date.now(),
        description,
        quantity: Number(quantity),
        packed: false,
      };
  
      addItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip</h3>
        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(+e.target.value);
          }}
        >
          {Array.from({ length: 20 }).map((i, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
        />
        <button>Add</button>
      </form>
    );
  }