import React from 'react';
import './login.css';

export function Login({ setUser }) {
  setUser('Joe');
  return (
    <main>
      <section>
        <form method='get' action='play.html'>
          <div>
            <span>@</span>
            <input type='text' placeholder='your@email.com' />
          </div>
          <div>
            <span>🔒</span>
            <input type='password' placeholder='password' />
          </div>
          <button type='submit'>Login</button>
          <button type='submit'>Create</button>
        </form>
      </section>
    </main>
  );
}
