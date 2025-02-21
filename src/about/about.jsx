import React from 'react';
import './about_style.css';

export function About() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    setImageUrl(`website_pitch.jpg`);
    setQuote('The dino are within you');
    setQuoteAuthor('Ur mom');
  }, []);

  return (
    <main>
    <div id="picture" className="picture-box"><img width="400px" src={imageUrl} alt="random image" /></div>

    <p>
      The dinos sing to you, you sing back to the dinos. Just press dinos to your heart's content.
    </p>

    <p>
      The little dinosaur family serves a purpose. The baby is a soprano, the kid is an alto,
      the mom is the tenor, and the dad is the bass.
    </p>

    <div className="quote-box">
      <p className = 'quote'> {quote}</p>
      <p className = 'author'>{quoteAuthor} </p>
    </div>
  </main>
  );
}