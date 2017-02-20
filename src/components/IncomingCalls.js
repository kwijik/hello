import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/CallStyles';

export default class IncomingCalls extends Component {
  render(){
    return (
      <div className={css(styles.calls)}>
          <p>you have 5 missed calls</p>
      </div>
    )
  }
}
