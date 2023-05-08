import './App.css';
import React from 'react'
import icon1 from './images/icon1.png';
import icespice from './images/icespice.png';


const app = () => (

  <>
  <header>Header</header>
  <main>Main</main>
  <icon>Icon</icon>
  <footer>Footer</footer>
  </>
)

function meow() {
  return (
    <><><header>
      </header><div id="images">
        <img src={icespice} className="icespice" width="100%" />
   <div>
  <p className="nav-bar">Home</p>
  <p className="nav-bar2">Search</p>
 <p className="nav-bar3">Your Library</p>
      </div>
    
      </div></><div id="images">
        <img src={icon1} alt="IconImage" width="15%" />
      </div><div id="song-title">
        <h1>Princess Diana</h1>
      </div><div id="artistname">
        <h2>Ice Spice, Nicki Minaj</h2>
      </div></>
    
  );
}

export default meow