import { useEffect, useState } from "react";
import "./Quotes.css";

export default function Quotes(props) {
  const colors = [
    "peru",
    "cadetblue",
    "forestgreen",
    "pink",
    "gray",
    "crimson",
  ];
  const [color, setColor] = useState("peru");
  const [data, setData] = useState(null);
  useEffect(() => {
    getRandomQuote();
  }, []);

  async function getRandomQuote() {
    const resp = await fetch("https://api.quotable.io/random");
    const json = await resp.json();
    setData(json);
  }

  const getNextQuote = () => {
    const currentColor = colors[Math.abs(Math.floor(Math.random() * 10) - 5)];
    setColor(currentColor);
    props.colorCallBack(currentColor);
    getRandomQuote();
  };

  if (!data) return null;

  return (
    <div className="quote-card" style={{ "--color": `${color}` }}>
      <div className="quote-card-body">
        <p>{data.content}</p>
        <p className="quote-author">- {data.author}</p>
      </div>
      <div className="quote-card-btn">
        {/* <button style={{ background: color }}>Share</button> */}
        <button
          type="button"
          className="next-quote-btn"
          onClick={getNextQuote}
          style={{ background: color }}
        >
          Next Quote
        </button>
      </div>
    </div>
  );
}
