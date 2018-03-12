var React = require('react');

var MenuLeft = React.createClass({
  render: function () {
    return (
      
<div className="navbar">
				<div className="dropdown">
					<button className="dropbtn">Menu 
			 		 <i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
					</div>
				</div>
			</div>
    )
  }
});

module.exports = MenuLeft;