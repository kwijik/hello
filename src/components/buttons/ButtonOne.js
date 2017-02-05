import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class ButtonOne extends Component {
  render(){
    return (
      <div className={css(styles.button)}>
          <p>1</p>
      </div>
    )
  }
}
