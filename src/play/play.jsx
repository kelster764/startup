import React from 'react';
import './play_styles.css';

export function Play({ user }) {
  const [dead, setdead] = React.useState(true);
  React.useEffect(() => {
    console.log('initial render');
    let friends = dinoFriends;
    setInterval(() => {
      friends = [{ name: 'gertrude', age: 87 }, ...friends];
      friends.pop()
      setDinoFriends(friends);
    }, 1000);
    //pretend my friend sent me a dino every second
  }, []);

  const [dinoFriends, setDinoFriends] = React.useState([
    { name: 'Rex', age: 5 },
    { name: 'Stegosaurus', age: 8 },
  ]);

  const clicked = () => {
    setdead(!dead);
  };

  let imgdisplay = 'mom.JPG';
  if (!dead) {
    imgdisplay = 'baby.JPG';
  }

  let i = 0;
  return (
    <div>
      user: {user}
      {dinoFriends.map((dino) => (
        <div key={i++}>
          <p>{dino.name}</p>
          <p>{dino.age}</p>
        </div>
      ))}
      <button style={{ width: '200px', height: 'r0px' }} onClick={clicked}>
        add dino
      </button>
      {imgdisplay} dino!
      <img src={imgdisplay} />
    </div>
  );

  // return (
  //   <main>
  //   <div className="players">
  //     Player:
  //     <span className="player-name">Mystery player</span>
  //   </div>
  //   <ul className="notification">
  //     <li className="player-name">Tim started a new game</li>
  //     <li className="player-name">Ada started a new game</li>
  //     <li className="player-name">Tim scored 337</li>
  //   </ul>

  //   <br />

  //   <div>
  //     <label for="count">Score</label>
  //     <input type="text" id="count" value="--" readonly />
  //   </div>

  //   <br />

  //   <div>
  //     <button>Reset</button>
  //   </div>

  //   <br />

  //   <div className="game">
  //     <div className="button-container">
  //       <div className = "button-container2">
  //       <button className="soprano"></button>
  //       <button className="alto"></button>
  //       <button className="tenor"></button>
  //       <button className="bass"></button>
  //       </div>
  //     </div>
  //   </div>
  // </main>
  // );
}
