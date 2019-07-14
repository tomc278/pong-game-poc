import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PongGame from "./pong";

import "./styles.css";

function App() {
  const [showGame, setShowGame] = useState(false);

  const configuration = {
    backgroundColor: "#2c3e50",
    gameOverTextColor: "#ffffff",
    gameStartTextColor: "#ffffff",
    paddlesAndBallColor: "#ffffff",
    netColor: "#ffffff"
  };

  const newConfiguration = {
    backgroundColor: "#222",
    gameOverTextColor: "#ffffff",
    gameStartTextColor: "#ffffff",
    paddlesAndBallColor: "#8164a9",
    netColor: "#FFDD33"
  };

  useEffect(() => {
    if (showGame) {
      PongGame.execute(newConfiguration);
    }
  }, [showGame]);

  return (
    <div className="App">
      <h1>PONG POC</h1>
      <button onClick={() => setShowGame(true)}>Start game</button>
      <button onClick={() => setShowGame(false)}>Exit game</button>
      {showGame && (
        <div className="canvas-container">
          <canvas />
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
