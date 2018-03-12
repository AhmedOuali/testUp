import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FlatButton from 'material-ui/FlatButton';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const styles = {
  root: {
    width: 500,
  },
};


class Footer extends Component {
	state = {
    selectedIndex: 0,
  };

  style= {
    buttom: 0
  }

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div>
        </div>
    );
  }
}

module.exports = Footer;