import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          {" "}
          <Dictionary defaultKeyword="bicycle" />{" "}
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="www.linkedin.com/in/gamze-senyurek-087094147"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gamze Senyurek
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/senyurekgamze/react-dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open sourced on Github.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
