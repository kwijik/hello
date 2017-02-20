import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ScreenStyles';
import IncomingCalls from './IncomingCalls';
import IncomingMessages from './IncomingMessages';

export default class Screen extends Component {
  render(){
    return (
      <div className={css(styles.screen)}>
          <IncomingCalls bValue='1'/>
          <IncomingMessages bValue='1'/>

      </div>
    )
  }
}
