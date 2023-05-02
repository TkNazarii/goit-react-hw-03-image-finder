import React, { Component } from 'react';
import css from './Button.module.scss';
import PropTypes from "prop-types";

export default class Button extends Component {

	state = {
		page: 1,
}

static propTypes = {
	changeValue: PropTypes.func.isRequired,
  };

	increment = (evt) => {
		evt.preventDefault();

		this.setState(prevState => ({
			page: prevState.page + 1
		  }));

		  this.props.changeValue(this.state.page)
	}

  render() {
// console.log(this.state);
    return (
		<div className={css['wrapper-load-more']}>
			<button className={css['wrapper-buton']} onClick={this.increment} type='button'>Load more</button>
		</div>
    );
  }
}
