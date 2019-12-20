import React, { Component } from 'react';
import FiltersDropDown from '../../components/FiltersDropDown';

import './DoggoPage.scss';
import {logger} from "../../index";

const CN = 'doggo-page';

export default class DoggoPage extends Component {

  state = {
    currentBreed: '',
  };

  loadDoggosList = (breed) => {
    const { getDoggosByBreed } = this.props;

    this.setState({
      currentBreed: breed ? breed : ''
    });

    getDoggosByBreed(breed);
  };

  renderList = () => {
    const { currentBreed } = this.state;
    const { images, loading } = this.props;


    if (loading) {
      return (
          <div>Loading ...  </div>
      )
    }

    return (
      <div className={`CN__list`}>
        {
          images.map(item => {
            return (
              <img src={item} key={item} alt={currentBreed} className={`${CN}__image`}/>
            );
          })
        }
      </div>
    );
  };

  componentDidMount() {
    const { getFilters } = this.props;

    getFilters && getFilters();
  }

  render() {
    const { data } = this.props;
    const { currentBreed } = this.state;

    return (
      <div className={`${CN}`}>
        <div className={`${CN}__container`}>
          <div>CurrentBreed: {currentBreed}</div>
          <FiltersDropDown
            data={data}
            onSelect={this.loadDoggosList}
          />
          {this.renderList()}
        </div>
      </div>
    );
  }
}

