var React = require('react');

var MenuRight = React.createClass({
  render: function () {
    return (
      
<div className="navbar2">
				<div className="dropdown2">
					<button className="dropbtn2"> 
					  <i className="fa fa fa-cogs"></i>
					</button>
					<div className="dropdown-content2">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
			</div>
		</div>
    )
  }
});

module.exports = MenuRight;

