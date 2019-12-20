import { GET_FILTERS, GET_LIST_BY_BREED,FINISH_SHOW_LOADING, SHOW_LOADING } from '../action-types';

const intialState = {
  filtersObject: {},
  images: [],
  loading: false
};

// this is doggos reducer
const filters = (state = intialState, action) => {

  switch (action.type) {
    case GET_FILTERS: {
      const { payload: { doggos } } = action;
      return {
        ...state,
        filtersObject: doggos
      };
    }

    case GET_LIST_BY_BREED: {
      const { payload: { images } } = action;

      return {
        ...state,
        images
      };
    }
    case SHOW_LOADING:{
      return {
        ...state,
        loading: true
      }

    }
    case FINISH_SHOW_LOADING:{
      return {
        ...state,
        loading: false
      }
    }

    default:
      return state
  }
};

export default filters;
