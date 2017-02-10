import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class UsualButton extends Component {
  render(){
    return (
      <div className={css(styles.myButton)}>
          <p>1</p>
      </div>
    )
  }
}
