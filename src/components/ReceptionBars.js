import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ReceptionBarsStyles';
import {generateBars} from './logic/Reception';
import GlobalState from './GlobalState';

export default class ReceptionBars extends Component {
    constructor(props) {
        super(props);
        this.state = {

            reception: this.props.initialReception
            //reception: 0
        }
        GlobalState.reception = this.state.reception
    }

    changeBars() {
      if (Math.random() < 0.2){
          this.setState((prevState) => ({
            reception: generateBars()
          }));
      } else {
          this.setState((prevState) => ({
            reception: prevState.reception
          }));
      }
    }

    componentDidMount() {
      this.interval = setInterval(() => this.changeBars(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }


   render(){
      //console.log(this.props.initialCalls);
    return (

      <div className={css(styles.wrapper)}>
          <div className={css(this.state.reception > 3 ? styles.perfectReception : styles.noShow)}> </div>
          <div className={css(this.state.reception > 2 ? styles.highReception : styles.noShow)}> </div>
          <div className={css(this.state.reception > 1 ? styles.mediumReception : styles.noShow)}> </div>
          <div className={css(this.state.reception > 0 ? styles.lowReception : styles.noShow)}> </div>
      </div>
    )
  }
}
