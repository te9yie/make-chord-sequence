import { useEffect, useState } from "react";
import "./App.css";

const Chord = (root, is_flat, quality) => (
  <span className="chord">
    {root}
    {is_flat ? <span className="flat">{"\u266D"}</span> : <></>}
    {quality}
  </span>
);

const CHORDS = [
  Chord("C", false, ""),
  Chord("C", false, "m"),
  Chord("D", false, ""),
  Chord("D", false, "m"),
  Chord("D", true, ""),
  Chord("D", true, "m"),
  Chord("E", false, ""),
  Chord("E", false, "m"),
  Chord("E", true, ""),
  Chord("E", true, "m"),
  Chord("F", false, ""),
  Chord("F", false, "m"),
  Chord("G", false, ""),
  Chord("G", false, "m"),
  Chord("G", true, ""),
  Chord("G", true, "m"),
  Chord("A", false, ""),
  Chord("A", false, "m"),
  Chord("A", true, ""),
  Chord("A", true, "m"),
  Chord("B", false, ""),
  Chord("B", false, "m"),
  Chord("B", true, ""),
  Chord("B", true, "m"),
];

const shuffle = (ary) => {
  let a = [...ary];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const App = () => {
  const [count, setCount] = useState(0);

  const seq = shuffle(CHORDS).slice(0, 4);

  useEffect(() => {}, [count]);

  return (
    <div className="App">
      <p>{seq}</p>
      <p>
        <button className="refresh" onClick={(e) => setCount(count + 1)}>
          Refresh
        </button>
      </p>
    </div>
  );
};

export default App;
