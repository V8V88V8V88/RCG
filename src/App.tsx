import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.floor(Math.random() * 30);
  const lightness = 50 + Math.floor(Math.random() * 20);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div
      className="background"
      style={{ 
        background: `linear-gradient(135deg, ${randomColor} 0%, #fad0c4 100%)`,
        transition,
      }}
    >
      <div
        id="quote-box"
        style={{
          boxShadow: `0 8px 32px 0 ${randomColor}55, 0 0 16px 2px ${randomColor}44`,
          border: `2px solid ${randomColor}`,
          ['--accent' as any]: randomColor,
        }}
      >
        <div className="quote-content">
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px", color: randomColor }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px", color: randomColor }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              background: randomColor,
              marginRight: "10px",
              transition,
              boxShadow: `0 0 8px 2px ${randomColor}55`,
            }}
            target="_blank"
            rel="noopener noreferrer"
            title="Tweet this quote"
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ background: randomColor, transition, boxShadow: `0 0 8px 2px ${randomColor}33` }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
