import React from 'react';

import './login.css';

export function Login({ setUser }) {
  //setUser('Joe');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('email');
      });
  }

  // async function logoutUser(){
  //   logout(`/api/auth/logout`)
  // }



  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
    setUser(email);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
    setUser(email);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('email', email);
      // props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

//   const clicked = () => {
// setUser(email);
  // }
  // ;
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
          <button type='submit' variant = 'primary' onClick={() => loginUser()}>
            Login</button>
          <button type='submit' variant = 'secondary' onClick= {() => createUser()}>
            Create</button>
          <button type = 'submit' onClick = {() => logout()}>
            logout</button>
      </section>
      {/* <MessageDialog message={displayError} onHide={() => setDisplayError(null)} /> */}
    </main>
  );
}
