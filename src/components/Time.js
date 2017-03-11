import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/TimeStyles';
import GlobalState from './GlobalState';
import {timeGenerator} from './logic/TimeGenerator';


export default class Time extends Component {
    constructor(props) {
        super(props);
        let d = timeGenerator();
        this.state = {
            time: d.time,
            date: d.date
        }
    }

    updateTime (){
        let d = timeGenerator();

            this.setState((prevState) => ({

                time: d.time,
                date: d.date
            }));

    }

    componentDidMount() {
      this.interval = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }



  render(){
      //console.log(timeGenerator());

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
