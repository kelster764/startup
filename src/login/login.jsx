import React from 'react';

import './login.css';

export function Login({ setUser }) {
  //setUser('Joe');

  const [email, setEmail] = React.useState('');

  const clicked = () => {
    setUser(email);
  
  };
  return (
    <main>
      <section>

          <div>
            <span>@</span>
            <input type='text' placeholder='your@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <div>
            <span>🔒</span>
            <input type='password' placeholder='password' />
          </div>
          <button type='submit' onClick={clicked}>Login</button>
          <button type='submit'>Create</button>
    
      </section>
    </main>
  );
}
