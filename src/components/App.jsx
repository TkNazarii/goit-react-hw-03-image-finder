import React, { Component } from "react";
import css from './App.module.scss';
import Modal from './06_Modal'

export class App extends Component {

	state = {
		showModal: false,
	}
	
	toggleModal = () => {
		// console.log('togle');
		this.setState( ({ showModal }) => ({
			showModal: !showModal,
		}))
	}

	render() {
		console.log(this.state.showModal);
		return (
			<div className={css['wrapper']} >
				<button onClick={this.toggleModal} type="button">open</button>
				{
					this.state.showModal && <Modal onClose={this.toggleModal}>
						<h1>asdasd</h1>
						<img src="" alt="" />
						<button onClick={this.toggleModal} type="button">close</button>
					</Modal>
				}
			</div>
		  );
	}
}