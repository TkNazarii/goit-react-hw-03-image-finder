import React, { Component } from 'react';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";


// create portal
const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {

	  static propTypes = {
		onClose: PropTypes.func.isRequired,
		largeImageURL: PropTypes.string.isRequired,
		tags: PropTypes.string.isRequired,
	  };

  componentDidMount() {
    // console.log('mount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('unmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
	if (e.currentTarget === e.target) {
		this.props.onClose()
	}
  }

  render() {
    // console.log(this.props.onClose);
    return createPortal(
      <div className={css['Modal__backdrop']} onClick={this.handleBackdropClick}>
        <div className={css['Modal__content']}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
