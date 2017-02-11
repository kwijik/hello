import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../../style/ButtonStyles';

export default class UsualButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hover: false
      }
  }
  render(){
    return (
      <div className = { css(styles.wrapper) }>
          <div className = { css(styles.myButton) }>
                  {this.props.bValue}
          </div>
      </div>

    )
  }
}
