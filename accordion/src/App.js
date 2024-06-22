import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          num={index}
          title={el.title}
          key={index}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  description,
  curOpen,
  setCurOpen,
  children,
}) {
  const isOpen = num === curOpen;

  const handleClick = () => {
    setCurOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleClick}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
