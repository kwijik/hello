import React, { Component } from 'react';
import Antenna from './components/Antenna';
import ModelName from './components/ModelName';
import Screen from './components/Screen';
import {generateBattery} from './components/logic/BatteryGenerator';
import {generateInitial} from './components/logic/DataGenerator';
import {generateBars} from './components/logic/Reception';
import Keyboard from './components/Keyboard';
import logo from './logo.svg';
import { css } from 'aphrodite/no-important';
import styles from './style/AppStyles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={css(styles.case)}>
          <Antenna />
          <ModelName />
          <Screen initialReception={ generateBars() }
             initialCalls= { generateInitial() }
             initialMessages = { generateInitial() }
             initialBattery = { generateBattery() }
         />
         <Keyboard />
      </div>
    );
  }
}

export default App;
