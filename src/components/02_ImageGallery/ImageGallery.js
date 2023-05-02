import PropTypes from "prop-types";
import React, { Component } from 'react';
import css from './ImageGallery.module.scss';

import ImageGalleryItem from 'components/03_ImageGalleryItem';

export default class ImageGallery extends Component {

	static propTypes = {
		buttonVsible: PropTypes.bool.isRequired,
  		imageName: PropTypes.string.isRequired,
  		toggle: PropTypes.func.isRequired,
  		imageModal: PropTypes.func.isRequired,
  		changePage: PropTypes.number.isRequired,
	  };

  render() {
	//   console.log(123, this.props);

    return (
		<ul className={css['gallery']}>
			<ImageGalleryItem buttonVsible={this.props.buttonVsible} pageValue={this.props.changePage} imageModalItem={this.props.imageModal} clickTogleModal={this.props.toggle} imageValue={this.props.imageName}/>
		</ul>
    );
  }
}
