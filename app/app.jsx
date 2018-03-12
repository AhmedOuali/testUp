var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Header = require('Header');
var Body = require('Body');
var Footer = require('Footer');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var bodyStyle = {
  zIndex : 13
};

ReactDOM.render(
 <div> 
  <MuiThemeProvider>
    <Body style={bodyStyle}/>
  </MuiThemeProvider>
  </div> 
  ,document.getElementById('app')
);
