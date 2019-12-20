import { ADD_DOGGO, REMOVE_DOGGO, REMOVE_ALL } from '../action-types';

const intialState = {
  likedDoggos: []
};

// this is doggos reducer
const doggos = (state = intialState, action) => {

  switch (action.type) {
    case ADD_DOGGO: {
      console.log('reducer ADD_DOGGO triggered')
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: [...likedDoggos, doggoUrl]
      };
    }
    case REMOVE_DOGGO: {
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: likedDoggos.filter(el => el !== doggoUrl)
      };
    }

    case REMOVE_ALL: {
      return {
        likedDoggos: []
      };
    }

    default:
      return state
  }
};

export default doggos;
