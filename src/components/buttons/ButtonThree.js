import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class ButtonOTwo extends Component {
  render(){
    return (
      <div className={css(styles.myButton)}>
          <p>3 def</p>
      </div>
    )
  }
}