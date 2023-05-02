import React, { Component } from 'react';
import css from './ImageGallery.module.scss';

import ImageGalleryItem from 'components/03_ImageGalleryItem';

export default class ImageGallery extends Component {

  render() {
	//   console.log(123, this.props);

    return (
		<ul className={css['gallery']}>
			<ImageGalleryItem buttonVsible={this.props.buttonVsible} pageValue={this.props.changePage} imageModalItem={this.props.imageModal} clickTogleModal={this.props.toggle} imageValue={this.props.imageName}/>
		</ul>
    );
  }
}
