import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/TimeStyles';
import GlobalState from './GlobalState';
import {timeGenerator} from './logic/TimeGenerator';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: timeGenerator()
        }
    }

    updateTime (){
        this.setState((prevState) => ({
            time: timeGenerator()
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
        <div className={css(styles.time)}>
            {this.state.time}
        </div>
    );
  }

}
