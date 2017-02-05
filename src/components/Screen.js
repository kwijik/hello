import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ScreenStyles';

export default class Screen extends Component {
  render(){
    return (
      <div className={css(styles.screen)}>

      </div>
    )
  }
}
