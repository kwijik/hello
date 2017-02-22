import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/MessagesStyles';

export default class IncomingMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfMessages: props.initialMessages,
            recentlyReceived: false
            //numOfMessages: 0
        }
    }

    getNewMessage() {
      if (Math.random() < 0.15){
            this.setState((prevState) => ({
            numOfMessages: prevState.numOfMessages + 1,
            recentlyReceived: true
        }));
        if (this.timeout){
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
            numOfMessages: prevState.numOfMessages,
            recentlyReceived: prevState.recentlyReceived
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
      if (this.state.recentlyReceived){
          return (

            <div className={css(styles.messages)}>
                <p>you have {this.state.numOfMessages} missed messages</p>
            </div>
        );
      } else {
          return null;
      }

  }
}
