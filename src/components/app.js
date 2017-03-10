import React, { Component } from 'react';
import Antenna from './Antenna';
import Screen from './Screen';
import Keyboard from './Keyboard';
import ModelName from './ModelName';
import { css } from 'aphrodite/no-important';
import styles from '../style/AppStyles';
import {generateBattery} from './logic/BatteryGenerator';
import {generateInitial} from './logic/DataGenerator';
import {generateBars} from './logic/Reception';

export default class App extends Component {

  render(){
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
    )
  }
}
