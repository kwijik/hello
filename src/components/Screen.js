import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ScreenStyles';
import IncomingCalls from './IncomingCalls';
import IncomingMessages from './IncomingMessages';
import ReceptionBars from './ReceptionBars';

export default class Screen extends Component {
  render(){
      //console.log(this.props.initialCalls);
    return (
      <div className={css(styles.screen)}>
          <ReceptionBars initialReception = {this.props.initialReception} />
          <IncomingCalls initialCalls = {this.props.initialCalls}/>
          <IncomingMessages initialMessages = {this.props.initialMessages} />


      </div>
    )
  }
}
