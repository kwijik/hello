import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/BatteryStyles';
import {generateBars} from './logic/Reception';
import GlobalState from './GlobalState';

export default class Battery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percents: 20
        }
    }




   render(){
     return (

        <div className={css(styles.wrapper)}>
            {this.state.percents}%
        </div>
     );
  }
}
