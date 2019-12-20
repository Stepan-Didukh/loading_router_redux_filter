import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo,removeDoggo, removeAll } from '../../actions/doggos.action';
import { getFilters } from '../../actions/filters.action';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos // this would be in HomePageComponent's props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilters: (args) => dispatch(getFilters(args)),
    likeDoggo: (args) => dispatch(likeDoggo(args)),
    removeDoggo: (args) => dispatch(removeDoggo(args)),
    removeAll: (args) => dispatch(removeAll(args)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);