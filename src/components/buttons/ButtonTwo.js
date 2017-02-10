import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class ButtonTwo extends Component {
  render(){
    return (
      <div className={css(styles.myButton)}>
          <p>2 abc</p>
      </div>
    )
  }
}
