import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class ButtonOTwo extends Component {
  render(){
    return (
      <div className={css(styles.button)}>
          <p>2 abc</p>
      </div>
    )
  }
}
