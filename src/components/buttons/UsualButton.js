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
  function showValue(e) {
      console.log(this.props.bValue);
  } 
  render(){
    return (
      <div className = { css(styles.wrapper) }>
          <div className = { css(styles.myButton) } onClick={showValue}>
                  {this.props.bValue}
          </div>
      </div>

    )
  }
}
