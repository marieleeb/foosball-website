import React, { Component } from 'react';
import './css/style.css';
import Logo from './img/deloitte_black.png';
import FoosballPic from './img/blur-foosball.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <body>
          <header>
            <img id="logo" alt="Deloitte logo" src={Logo}></img>
          </header>

          <div className="outer-grid">

            {/* Scoreboard */}

            <div className="inner-grid">
              <div id="timeRem" className="scoreBoard">
                <p id="pTime">Time Remaining</p>
                <p id="time" className="num">5:00</p>
              </div>

          
              <div id="redTeam" className="scoreBoard">
                <p id="pRed">Red Team</p>
              </div>

              <div id="scoreRed" className="scores">
              <p class="pScore">0</p>
              </div>

              <div id="blueTeam" className="scoreBoard">
                <p id="pBlue">Blue Team</p>
              </div>

              <div id="scoreBlue" className="scores">
                <p class="pScore">0</p>
              </div>
            </div>

            {/* Widgets */}
            <div id="noise" className="widgets">
              <p id="pNoise">Noise Level</p>
            </div>

            <div id="goalStreak" className="widgets">
              <p className="num">0</p>
              <p>Goals Streak</p>
            </div>

            <div id="goalRecord" className="widgets">
              <p className="num">0</p>
              <p>Goals in a Single Game</p>
            </div>

            <div id="gamePlayed" className="widgets">
              <p>Games Played Today</p>
            </div>

            <div id="busyTime" className="widgets">
                <p>Busiest Time of the Day</p>
            </div>


  
            <div id="leadBoard"><p>Leaderboard</p></div>
          </div>

          <div className="footer-pic">
            <img id="foosball-img" alt="" src={FoosballPic} width="100%"></img>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
