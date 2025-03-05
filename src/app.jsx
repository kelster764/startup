import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  const [user, setUser] = React.useState('Billy');
  const[yourDino, setDino] = React.useState("");
  return (
    <BrowserRouter>
      <div>
        <header>
          <section className='fly-in'>
            <h1>Dinos Singing</h1>
          </section>
          <section className='fly-in'>
            <nav>
              <menu>
                <li>
                  <NavLink className='nav-link' to='/'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='play'>
                    Play
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='scores'>
                    Scores
                  </NavLink>
                </li>
                <li>
                  <NavLink className='nav-link' to='about'>
                    About
                  </NavLink>
                </li>
              </menu>
            </nav>
          </section>
          <hr />
        </header>

        <Routes>
          <Route path='/' element={<Login setUser={setUser} />} exact />
          <Route path='/play' element={<Play user={user} setDino={setDino} dino = {yourDino}/>} />
          <Route path='/scores' element={<Scores dino={yourDino} username={user}/>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Login />} />
        </Routes>

        <footer>
          <hr />
          <span className='text-reset'>Kelly Harmon</span>
          <br />
          <a href='https://github.com/kelster764/startup'>GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
