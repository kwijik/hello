import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/MessagesStyles';

export default class IncomingMessages extends Component {
  render(){
    return (
      <div className={css(styles.messages)}>
          <p>you have 9 missed messages</p>
      </div>
    )
  }
}
