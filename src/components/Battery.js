import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from '../style/ReceptionBarsStyles';
import {generateBars} from './logic/Reception';
import GlobalState from './GlobalState';

export default class ReceptionBars extends Component {
    constructor(props) {
        super(props);

    }




   render(){
     return (

        <div className={css(styles.wrapper)}>

        </div>
     );
  }
}
