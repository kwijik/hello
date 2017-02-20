import React, { Component } from 'react';
import UsualButton from './buttons/UsualButton';
import { css } from 'aphrodite/no-important';

import styles from '../style/KeyboardStyles';

export default class Keyboard extends Component {
  render(){
    return (
      <div className={css(styles.keyboard)}>
          <UsualButton bValue='1'/>
          <UsualButton bValue='2abc'/>
          <UsualButton bValue='3def'/>
          <UsualButton bValue='4ghi'/>
          <UsualButton bValue='5jkl'/>
          <UsualButton bValue='6mno'/>
          <UsualButton bValue='7pqrs'/>
          <UsualButton bValue='8tuv'/>
          <UsualButton bValue='9vxyz'/>
          <UsualButton bValue='*'/>
          <UsualButton bValue='0'/>
          <UsualButton bValue='#'/>
      </div>
    )
  }
}
