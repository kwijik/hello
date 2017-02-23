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
        GlobalState.hasPower = this.state.percents > 1;

    }


    drainBattery() {
        if (Math.random() < 0.2){
            this.setState((prevState) => ({
                percents: prevState.percents - 1
        }));
        } else {
            this.setState((prevState) => ({
                percents: prevState.percents
            }));
        }
        GlobalState.hasPower = this.state.percents > 1;
    }

    componentDidMount() {
      this.interval = setInterval(() => this.drainBattery(), 4000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }



   render(){
       console.log(`Percents of charge: ${this.state.percents}`);
       console.log(`Global object from Battery: ${GlobalState.hasPower}`);
     return (

        <div className={css(styles.wrapper)}>
            {this.state.percents}%
        </div>
     );
  }
}
