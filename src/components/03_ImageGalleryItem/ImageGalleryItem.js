import React, { Component } from 'react';
import css from './ImageGalleryItem.module.scss';
import Loader from 'components/04_Loader';
import fetchImage from 'servises/pixabay-api';
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {

  state = {
    imageNameFetch: [],
    // loading: false,
    error: null,
    status: 'idle',
	buttonHiden: false,
  };

  static propTypes = {
	buttonVsible: PropTypes.bool.isRequired,
	pageValue: PropTypes.number.isRequired,
	imageModalItem: PropTypes.func.isRequired,
	clickTogleModal: PropTypes.func.isRequired,
	imageValue: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageValue;
    const nextName = this.props.imageValue;
	const prevPage = prevProps.pageValue;
	const nextPage = this.props.pageValue

	if (prevState.buttonHiden !== this.state.buttonHiden) {
		this.props.buttonVsible(this.state.buttonHiden)
	}

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

        fetchImage(nextName, nextPage, 12)
          .then(resp => {
            if (resp.ok) {
				// console.log(resp);
              return resp.json();
            }
            return Promise.reject(new Error('Here is a mistake'));
          })

		.then(data => {
			if (data.total > 12) {
				// console.log('true button')
				this.setState({buttonHiden: true})
			} else {
				// console.log('false button')
				this.setState({buttonHiden: false})
			} 

			this.setState(prevState => ({ 
			  imageNameFetch: [...prevState.imageNameFetch, ...data.hits], 
			  status: 'resolved',
			}))
		}
		  )
			.catch(error => this.setState({ error: error, status: 'rejected' }));
    }
  }



  clickItem = (url, alt) => {
	this.props.imageModalItem(url,alt)
	this.props.clickTogleModal()
  }

  render() {
	// console.log(this.state.buttonHiden);
	
    if (this.state.status === 'idle') {
      return <div>What are you looking for</div>;
    }

    if (this.state.status === 'pending') {
      return <Loader />;
    }

    if (this.state.status === 'rejected') {
      return <h2>this.state.error.message</h2>;
    }

    if (this.state.status === 'resolved') {
      return (
        <>
          {this.state.imageNameFetch.map(el => (
            <li className={css['photo-card']} key={el.id} onClick={() => this.clickItem(el.largeImageURL, el.tags)}>
              <img className={css['gallary-image']} src={el.webformatURL} alt={el.tags} />
            </li>
          ))}
        </>
      );
    }
  }
}
