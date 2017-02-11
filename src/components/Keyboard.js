import React, { Component } from 'react';
import UsualButton from './buttons/UsualButton';
import { css } from 'aphrodite/no-important';
import ButtonTwo from './buttons/ButtonTwo';

import styles from '../style/KeyboardStyles';

export default class Keyboard extends Component {
  render(){
    return (
      <div className={css(styles.keyboard)}>
          <UsualButton bValue='1'/>
          <UsualButton bValue='2'/>
          <UsualButton bValue='3'/>
         
      </div>
    )
  }
}
