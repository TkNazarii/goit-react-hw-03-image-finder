import React, { Component } from "react";
import css from './App.module.scss';
import Searchbar from "./01_Searchbar";
import ImageGallery from "./02_ImageGallery";
import Button from "./05_Button";
import Modal from './06_Modal'

export class App extends Component {

	state = {
		showModal: false,
		imageName: '',
		largeImageURL: '',
		tags: '',
		page: 1,
		buttonVsible: false,
}

buttonVsible = buleanButton => {
	// console.log(buleanButton);
	this.setState({buttonVsible: buleanButton})
}

formImageName = dataForm => {
	this.setState({imageName: dataForm})
}

pageIncrement = value => {
	this.setState({page: value})
}

toggleModal = () => {
		// console.log('togle');
		this.setState( ({ showModal }) => ({
			showModal: !showModal,
		}))
	}

giveLargeImage = (url, alt) => {
	this.setState({largeImageURL: url,
	tags: alt,})
}

	render() {
		// console.log(this.state.buttonVsible);
		return (
			<div className={css['wrapper']} >
				{
					this.state.showModal && <Modal onClose={this.toggleModal}>
						<img src={this.state.largeImageURL} alt={this.state.tags} />
					</Modal>
				}

				<Searchbar onSubmit={this.formImageName}/>
				<ImageGallery buttonVsible={this.buttonVsible} imageName={this.state.imageName} toggle={this.toggleModal} imageModal={this.giveLargeImage} changePage={this.state.page}/>
				{this.state.buttonVsible && <Button changeValue={this.pageIncrement}/>}
				{/* <Button changeValue={this.pageIncrement}/> */}
			</div>
		  );
	}
}
