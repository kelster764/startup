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
        <tr>
          <td>{username}</td>
          <td>{dino}</td>
        </tr>
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