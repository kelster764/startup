import React from 'react';

import './login.css';

export function Login({ setUser }) {
  //setUser('Joe');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
    setUser(email);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
    setUser(email);
  }

//   const clicked = () => {
// setUser(email);
  // }
  ;
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
            <input type='password' placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' variant = 'primary' onClick={() => loginUser()} disabled={!userName || !password}>
            Login</Button>
          <Button type='submit' variant = 'secondary' onCLick= {() => createUser()} disabled={!userName || !password}>
            Create</Button>
      </section>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </main>
  );
}
