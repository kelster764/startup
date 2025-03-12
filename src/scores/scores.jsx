import React from 'react';
import './scores_style.css';






export function Scores() {
  const [scores, setScores] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });
  }, []);

const scoreRows = [];
if (scores.length){
  for (const [i, score] of scores.entries()) {
    scoreRows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>{score.name}</td>
        <td>{score.dino}</td>
      </tr>
    );
  }
} else {
  scoreRows.push(
    <tr key='0'>
      <td colSpan='2'>pick a dino!!</td>
    </tr>
  );
}


  return (
    
    <main>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Dino</th>
        </tr>
      </thead>
      <tbody>
        {scoreRows}
      </tbody>
    </table>
  </main>
  );
}


// export function Scores({dino, username}) {
//   return (
    
//     <main>
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Dino</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{username}</td>
//           <td>{dino}</td>
//         </tr>
//       </tbody>
//     </table>
//   </main>
//   );
// }