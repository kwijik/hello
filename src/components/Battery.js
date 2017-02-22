import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/BatteryStyles';
import GlobalState from './GlobalState';

export default class Battery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percents: props.initialBattery
        }
    }




   render(){
       console.log(this.props.initialBattery);

     return (

        <div className={css(styles.wrapper)}>
            {this.state.percents}%
        </div>
     );
  }
}
