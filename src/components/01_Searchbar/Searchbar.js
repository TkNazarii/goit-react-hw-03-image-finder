import React, { Component } from 'react';
import css from './Searchbar.module.scss';
import PropTypes from "prop-types";

export default class Searchbar extends Component {

	state = {
		imageName: '',
	}

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	  };

	handleNameChange = evt => {
		// console.log(evt.currentTarget.value.toLowerCase());
		this.setState({imageName: evt.currentTarget.value.toLowerCase()})
	}

	handleSubmit = evt => {
		evt.preventDefault();

		if (this.state.imageName.trim() === '') {
			alert('no name image');
			return 
		}

		this.props.onSubmit(this.state.imageName)

		// this.setState({imageName: ''})

	}

  render() {

	return (
		<header className={css['form-wrap']}>
		<form className={css['search-form']} onSubmit={this.handleSubmit}>
		  <input
		  className={css['search-input']}
			type="text"
			autoComplete="off"
			autoFocus
			placeholder="Search images and photos"
			value={this.state.imageName}
			onChange={this.handleNameChange}
		  />
	  
		  <button className={css['search-buttot']} type="submit" >
			<span>Search</span>
		  </button>
		</form>
	  </header>
    );
  }
}
