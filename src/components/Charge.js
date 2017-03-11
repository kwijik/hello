import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';

import styles from '../style/ChargeStyles';

export default class Antenna extends Component {
  render(){
    return (
        <div className="switch">
              <input className="input" type="checkbox"/>
         </div>
    )
  }
}
