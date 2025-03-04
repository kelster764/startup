import React from 'react';
import './play_styles.css';



const getRandomName = () => {
  const names = ['frick', 'jeffrey', 'donald', 'gertrude', 'quinton', 'trenton', 'bennet', 'youngsheldon']
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomAge = () => (Math.floor(Math.random() * 70) + 10);

export function Play({ user }) {
  const [dead, setdead] = React.useState(true);
  const[yourDino, setDino] = React.useState("");
  React.useEffect(() => {
    console.log('initial render');
    let friends = dinoFriends;
    setInterval(() => {
      const newFriend = { name: getRandomName(), age: getRandomAge() }
      friends = [ newFriend, ...friends];
      friends.pop()
      setDinoFriends(friends);
    }, 10000);
    //pretend my friend sent me a dino every second
  }, []);

  const [dinoFriends, setDinoFriends] = React.useState([
    { name: 'Rex', age: 5 },
    { name: 'Stegosaurus', age: 8 },
  ]);

  const clicked = () => {
    setdead(!dead);
  };

  const dinoHandler = (dino) => {
    setDino(dino)
  };

  let imgdisplay = 'mom.JPG';
  if (!dead) {
    imgdisplay = 'baby.JPG';
  }

  let i = 0;
  return (
    
    <div>
      <p>Your selected Dino: {yourDino}</p>
      user: {user}
      {dinoFriends.map((dino) => (
        <div key={i++}>
          <p>{dino.name}</p>
          <p>{dino.age}</p>
        </div>
      ))}
      <button style={{ width: '100px', height: '100px' }} onClick={() => dinoHandler('baby')}>
      <img src="baby.jpg" alt="baby" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '100px', height: '100px' }} onClick={() => dinoHandler('kid')}>
      <img src="kid.jpg" alt="kid" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '100px', height: '100px' }} onClick={() => dinoHandler('mom')}>
      <img src="mom.jpg" alt="mom" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '100px', height: '100px' }} onClick={() => dinoHandler('dad')}>
      <img src="dad.jpg" alt="dad" style={{ width: '100px', height: 'auto' }} />
      </button>
      {/* {imgdisplay} dino!
      <img src={imgdisplay} /> */}
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
