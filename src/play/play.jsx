import React from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
import { Players } from './players';
import './play_styles.css';

const babysound = new Audio(`/baby.mp3`);
const kidsound = new Audio(`/kid.mp3`);
const momsound = new Audio(`/mom.mp3`);
const dadsound = new Audio(`/dad2.mp3`);


const getRandomName = () => {
  const names = ['frick', 'jeffrey', 'donald', 'gertrude', 'quinton', 'trenton', 'bennet', 'youngsheldon']
  return names[Math.floor(Math.random() * names.length)];
};




const getRandomAge = () => (Math.floor(Math.random() * 70) + 10);

export function Play({ user, setDino, dino }) {
  const [dead, setdead] = React.useState(true);
  //const[yourDino, addDino] = React.useState("");

  // React.useEffect(() => {
  //   console.log('initial render');
  //   let friends = dinoFriends;
  //   setInterval(() => {
  //     const newFriend = { name: getRandomName(), age: getRandomAge() }
  //     friends = [ newFriend, ...friends];
  //     friends.pop()
  //     setDinoFriends(friends);
  //   }, 10000);
    
  // }, []);

  // const [dinoFriends, setDinoFriends] = React.useState([
  //   { name: 'Rex', age: 5 },
  //   { name: 'Stegosaurus', age: 8 },
  // ]);

  const clicked = () => {
    setdead(!dead);
  };

  const dinoHandler = (dino) => {
    setDino(dino);
    if(dino === 'baby'){
      babysound.play();

    }
    else if(dino === 'kid'){
      kidsound.play();
    }
    else if(dino === 'mom'){
      momsound.play();
    }
    else if(dino === 'dad'){
      dadsound.play();
    }

    saveScore(dino);
  };

  async function saveScore(dino){
    const newScore = {name: user, dino: dino};
    
    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
    if(newScore.dino === 'baby'){
      console.log("whatever");
    GameNotifier.broadcastEvent(user, GameEvent.Baby, {msg: 'is baby'});
    }
    else if (newScore.dino === 'kid'){
      GameNotifier.broadcastEvent(user, GameEvent.Kid, {msg: 'is kid'});
    }
    else if (newScore.dino === 'mom'){
      GameNotifier.broadcastEvent(user, GameEvent.Mom, {msg: 'is mom'});
    }
    else if (newScore.dino === 'dad'){
      GameNotifier.broadcastEvent(user, GameEvent.Dad, {msg: 'is dad'});
    }
  }

  let imgdisplay = 'mom.JPG';
  if (!dead) {
    imgdisplay = 'baby.JPG';
  }

  let i = 0;
  return (
    
    <div>
      <p>Your selected Dino: {dino} </p>
      <p>
        user: {user}
        </p>
      {/* {dinoFriends.map((dino) => (
        // <div key={i++}>
        //   <p>{dino.name}</p>
        //   <p>{dino.age}</p>
        // </div>
      ))} */}
      <button style={{ width: '100px', height: '100px' }} onClick={() => dinoHandler('baby')}>
      <img src="baby.JPG" alt="baby" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '115px', height: '115px' }} onClick={() => dinoHandler('kid')}>
      <img src="kid.JPG" alt="kid" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '130px', height: '130px' }} onClick={() => dinoHandler('mom')}>
      <img src="mom.JPG" alt="mom" style={{ width: '100px', height: 'auto' }} />
      </button>
      <button style={{ width: '140px', height: '140px' }} onClick={() => dinoHandler('dad')}>
      <img src="dad.JPG" alt="dad" style={{ width: '150px', height: 'auto' }} />
      </button>
      {/* {imgdisplay} dino!
      <img src={imgdisplay} /> */}
      <Players userName={user} />
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
