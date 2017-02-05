import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ModelNameStyles';

export default class ModelName extends Component {
  render(){
    return (
      <div className={css(styles.model)}>
          <p>LeriaMi</p>
      </div>
    )
  }
}
