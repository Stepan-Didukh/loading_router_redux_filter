import React, { Component } from 'react';
import './PetPreview.scss';

const CN = 'pet-preview';

class PetPreview extends Component {
  render() {
    const { imageUrl } = this.props;

    return (
      <div className={CN}>
        {imageUrl && <img className={`${CN}__image`} src={imageUrl} alt=""/>}
      </div>
    );
  }
}

PetPreview.propTypes = {};

export default PetPreview;
