import React from 'react';

export function Play() {
  return (
    <main>
    <div class="players">
      Player:
      <span class="player-name">Mystery player</span>
    </div>
    <ul class="notification">
      <li class="player-name">Tim started a new game</li>
      <li class="player-name">Ada started a new game</li>
      <li class="player-name">Tim scored 337</li>
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

    <div class="game">
      <div class="button-container">
        <div class = "button-container2">
        <button class="soprano"></button>
        <button class="alto"></button>
        <button class="tenor"></button>
        <button class="bass"></button>
        </div>
      </div>
    </div>
  </main>
  );
}