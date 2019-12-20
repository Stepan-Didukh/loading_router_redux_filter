import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';

import './LikedPetsList.scss';

const CN = 'liked-pets-list';


function PetsListItem(props) {
  const { pet, onDelete } = props;

  return (
    <div className={`${CN}__item`} key={pet}>
      <img
        src={pet}
        alt="pet"
      />
      <DeleteIcon
        data-target={pet}
        className={`${CN}__btn--delete`}
        onClick={onDelete}
      />
    </div>
  );
}

export class LikedPetsList extends Component {
  deleteDoggo = (e) => {
    debugger;
    const { remove } = this.props;

    const id = e.currentTarget.getAttribute('data-target');


    id && remove && remove(id);
  };

  delete = (id) => {
    const { remove } = this.props;

    return () => {
      remove && remove(id);
    }
  };

  render() {
    const { list: urlList } = this.props;

    return (
      <div className={CN}>
        {
          urlList.map(pet => {
            return (
              <PetsListItem
                key={pet}
                pet={pet}
                onDelete={this.delete(pet)}
              />
            );
          })
        }
      </div>
    );
  }
}
