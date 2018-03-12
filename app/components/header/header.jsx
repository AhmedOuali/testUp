var React = require('react');
var MenuLeft = require('MenuLeft')
var MenuRight = require('MenuRight')
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

// require('style!css!header.css')
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
const Notif = () => (
<div>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  </div>
)

Logged.muiName = 'IconMenu';
const style = {
  margin: 2};
const barStyle = {
  backgroundColor: "#cf022b"};
var Header = React.createClass({
  render: function () {
    return (
      <div>
        
        <AppBar
          title="Mohamed Dai"
          style= {barStyle}
          iconElementLeft={true ? <Logged /> : <Login />}
          
          iconElementRight={<Avatar
            src="http://www.material-ui.com/images/ok-128.jpg"
            size={50}
            style={style}
          />}
        />
      </div>
    )
  }
});

module.exports = Header;