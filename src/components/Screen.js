import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ScreenStyles';
import IncomingCalls from './IncomingCalls';
import IncomingMessages from './IncomingMessages';

export default class Screen extends Component {
  render(){
      //console.log(this.props.initialCalls);
    return (
      <div className={css(styles.screen)}>
          <IncomingCalls initialCalls = {this.props.initialCalls}/>
          <IncomingMessages initialMessages = {this.props.initialMessages} />

      </div>
    )
  }
}
