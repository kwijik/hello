import React, { Component } from 'react';
import UsualButton from './buttons/UsualButton';
import { css } from 'aphrodite/no-important';

import styles from '../style/KeyboardStyles';

export default class Keyboard extends Component {
  render(){
    return (
      <div className={css(styles.keyboard)}>
          <UsualButton bValue='1'/>
          <UsualButton bValue='2'/>
          <UsualButton bValue='3'/>
          <UsualButton bValue='4'/>
          <UsualButton bValue='5'/>
          <UsualButton bValue='6'/>
          <UsualButton bValue='7'/>
          <UsualButton bValue='8'/>
          <UsualButton bValue='9'/>
          <UsualButton bValue='*'/>
          <UsualButton bValue='0'/>
          <UsualButton bValue='#'/>
      </div>
    )
  }
}
