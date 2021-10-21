import React from "react";
import stile from"./style.css";

export default function App() {
  return (
    <div>
        <div class="ciao" style={stile}>
          <h1>TESTO h1</h1>
          <h2>TESTING h2</h2>
        </div>
      <h2>TESTO h2</h2>
      <h3>TESTO h3</h3>
        <div class="fabius" style={stile}>
          <h4>TESTO h4</h4>
          <h5>TESTO h5</h5>
        </div>
      <h6>TESTO h5</h6>
      <h2>TESTO h2</h2>
      <p>titolo paragrafo</p>
    </div>
  );
}