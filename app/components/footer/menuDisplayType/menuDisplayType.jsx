var React = require('react');

var MenuDisplayType = React.createClass({
  render: function () {
    return (
		
      <li className="nav-bar__list-item">
				<label htmlFor="toggle-sub-3" className="nav-bar__sub-label">Type d'affichage</label>
				<input type="checkbox" id="toggle-sub-3" className="nav-bar__toggle"/>
				<ul className="nav-bar__list">
						<li className="nav-bar__list-item">
								<a href="#" className="nav-bar__link" onClick={this.props.manipulatingCalendar.monthView}>Compact</a>
						</li>
						<li className="nav-bar__list-item">
								<a href="#" className="nav-bar__link" onClick={this.props.manipulatingCalendar.weekView}>No compact</a>
						</li>
				</ul>
			</li>
			
    )
  }
});

module.exports = MenuDisplayType;