import React from 'react';
import './about_style.css';

export function About() {
  return (
    <main>
    <div id="picture" class="picture-box"><img width="400px" src="website_pitch.jpg" alt="random" /></div>

    <p>
      The dinos sing to you, you sing back to the dinos. Just press dinos to your heart's content.
    </p>

    <p>
      The little dinosaur family serves a purpose. The baby is a soprano, the kid is an alto,
      the mom is the tenor, and the dad is the bass.
    </p>

    <div id="quote">
      <div>The dino are within you.</div>
      <div>- me</div>
    </div>
  </main>
  );
}