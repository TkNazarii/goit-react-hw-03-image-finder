import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner'
import css from './Loader.module.scss';

export default class Loader extends Component {

  render() {

    return (
		<div className={css['loader-animation']}>

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
/>
		</div>
    );
  }
}
