import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/TimeStyles';
import GlobalState from './GlobalState';
import {timeGenerator} from './logic/TimeGenerator';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default class Time extends Component {
    constructor(props) {
        super(props);
        let d = timeGenerator();
        this.state = {
            time: `${d.getHours()}:${d.getMinutes()}`,
            date: `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTH[d.getMonth()]}`
        }
    }

    updateTime (){
        let d = timeGenerator();

        this.setState((prevState) => ({
            time: `${d.getHours()}:${d.getMinutes()}`,
            date: `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTH[d.getMonth()]}`
        }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }



  render(){
      console.log(timeGenerator());
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.time)}>
                {this.state.time}
            </div>
            <div className={css(styles.date)}>
                {this.state.date}
            </div>
        </div>

    );
  }

}
