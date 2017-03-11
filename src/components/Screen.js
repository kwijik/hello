import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ScreenStyles';
import IncomingCalls from './IncomingCalls';
import IncomingMessages from './IncomingMessages';
import ReceptionBars from './ReceptionBars';
import Battery from './Battery';
import Time from './Time';
import GlobalState from './GlobalState';

import {timeGenerator} from './logic/TimeGenerator';



export default class Screen extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      this.interval = setInterval(() => this.forceUpdate(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

  render(){
      //console.log(`Global object from Screen: ${GlobalState.hasPower}`);
      if (GlobalState.hasPower){
          return (

            <div className={css(styles.screen)}>
                <ReceptionBars initialReception = {this.props.initialReception} />
                <Battery initialBattery = {this.props.initialBattery} />
                <Time  />

                <IncomingCalls initialCalls = {this.props.initialCalls}/>
                <IncomingMessages initialMessages = {this.props.initialMessages} />

            </div>
          )
      } else {
          return (
              <div className={css(styles.screen, styles.blank)}>Kiano</div>
          )
      }

  }
}
