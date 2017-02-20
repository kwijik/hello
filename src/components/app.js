import React, { Component } from 'react';
import Antenna from './Antenna';
import Screen from './Screen';
import Keyboard from './Keyboard';
import ModelName from './ModelName';
import { css } from 'aphrodite/no-important';
import styles from '../style/AppStyles';

export default class App extends Component {

generateInitial(){
    return  Math.floor(Math.random() * 5) + 1;
}

  render(){
    return (
      <div className={css(styles.case)}>
          <Antenna />
          <ModelName />
          <Screen initialCalls= {this.generateInitial()} initialMessages = {this.generateInitial()}/>
          <Keyboard />
      </div>
    )
  }
}
