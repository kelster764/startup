import React from 'react';
import './play_styles.css';

export function Play() {
  return (
    <main>
    <div className="players">
      Player:
      <span className="player-name">Mystery player</span>
    </div>
    <ul className="notification">
      <li className="player-name">Tim started a new game</li>
      <li className="player-name">Ada started a new game</li>
      <li className="player-name">Tim scored 337</li>
    </ul>


    <br />

    <div>
      <label for="count">Score</label>
      <input type="text" id="count" value="--" readonly />
    </div>

    <br />

    <div>
      <button>Reset</button>
    </div>

    <br />

    <div className="game">
      <div className="button-container">
        <div className = "button-container2">
        <button className="soprano"></button>
        <button className="alto"></button>
        <button className="tenor"></button>
        <button className="bass"></button>
        </div>
      </div>
    </div>
  </main>
  );
}