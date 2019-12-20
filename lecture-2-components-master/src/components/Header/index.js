import { connect } from 'react-redux';
import { Header as HeaderComponent } from './Header';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos // this would be in HomePageComponent's props
  };
};

export const Header = connect(mapStateToProps)(HeaderComponent);