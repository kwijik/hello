import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/CallStyles';

export default class IncomingCalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //numOfCalls: this.props.initialCalls
            numOfCalls: this.props.initialCalls

        }
    }


  getNewCall() {
    if (Math.random() < 0.15){
        this.setState((prevState) => ({
          numOfCalls: prevState.numOfCalls + 1
        }));
    } else {
        this.setState((prevState) => ({
          numOfCalls: prevState.numOfCalls
        }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getNewCall(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className={css(styles.calls)}>
          <p>you have  {this.state.numOfCalls} missed calls</p>
      </div>
    )
  }
}
