import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/CallStyles';

export default class IncomingCalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //numOfCalls: this.props.initialCalls
            numOfCalls: this.props.initialCalls,
            recentlyReceived: false

        }
    }


  getNewCall() {
    if (Math.random() < 0.02){
        this.setState((prevState) => ({
          numOfCalls: prevState.numOfCalls + 1,
          recentlyReceived: true
        }));
        if( this.timeout){
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout( () => {
            this.timeout = null;
            this.setState((prevState) => ({
              numOfMessages: prevState.numOfMessages,
              recentlyReceived: false
          }));
        }, 4000);
    } else {
        this.setState((prevState) => ({
          numOfCalls: prevState.numOfCalls,
          recentlyReceived: prevState.recentlyReceived
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
    if (this.state.recentlyReceived){
        return (
            <div className={css(styles.calls)}>
                <p>you have  {this.state.numOfCalls} missed calls</p>
            </div>
     );
 } else {
     return null;
 }
  }
}
