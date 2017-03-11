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
        let percents = this.state.percents;
        if (Math.random() < 0.2 && this.state.percents > 0){
            //this.setState((prevState) => ({
            //    percents: prevState.percents - 1
            percents -= 1;
        //}));
        //} else {

        }
        this.setState((prevState) => ({
            percents: percents
        }));
        GlobalState.hasPower = percents > 0;
    }

    componentDidMount() {
      this.interval = setInterval(() => this.drainBattery(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }



   render(){
       //console.log(`Percents of charge: ${this.state.percents}`);
       //console.log(`Global object from Battery: ${GlobalState.hasPower}`);

       //console.log(`Global object from Messages: ${GlobalState.showMessage}`);
       //console.log(`Global object from Calls: ${GlobalState.showCall}`);

     return (

        <div className={css(styles.wrapper)}>
            {this.state.percents}%
        </div>
     );
  }
}
