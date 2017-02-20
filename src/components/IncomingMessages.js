import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/MessagesStyles';

export default class IncomingMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfMessages: props.initialMessages
            //numOfMessages: 0
        }
    }

    getNewMessage() {
      if (Math.random() < 0.20){
          this.setState((prevState) => ({
            numOfMessages: prevState.numOfMessages + 1
          }));
      } else {
          this.setState((prevState) => ({
            numOfMessages: prevState.numOfMessages
          }));
      }
    }

    componentDidMount() {
      this.interval = setInterval(() => this.getNewMessage(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

  render(){
    return (
      <div className={css(styles.messages)}>
          <p>you have {this.state.numOfMessages} missed messages</p>
      </div>
    )
  }
}
