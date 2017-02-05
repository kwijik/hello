import React, { Component } from 'react';
import ButtonOne from './buttons/ButtonOne';
import { css } from 'aphrodite/no-important';

import styles from '../style/KeyboardStyles';

export default class Keyboard extends Component {
  render(){
    return (
      <div className={css(styles.keyboard)}>
          <ButtonOne />
      </div>
    )
  }
}
