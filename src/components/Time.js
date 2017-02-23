import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
//import styles from '../style/TimeStyles';
import GlobalState from './GlobalState';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canShow : !GlobalState.showMessage || !GlobalState.showCall
        }

    }

updateState() {
  this.setState((prevState) => ({
    canShow: !GlobalState.showMessage || !GlobalState.showCall
  }));
}

componentDidMount() {
  this.interval = setInterval(() => this.updateState(), 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}



  render(){
        if (this.state.canShow){
            return (
                <p>time</p>
            )
        }else {
            return (
                null
            )
        }




  }

}
