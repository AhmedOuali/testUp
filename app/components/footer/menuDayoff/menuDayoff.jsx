var React = require('react');

var MenuDayoff = React.createClass({
  render: function () {
    return (
			
      <li className="nav-bar__list-item">
                <label htmlFor="toggle-sub-2" className="nav-bar__sub-label">Type de congé</label>
								
                <input type="checkbox" id="toggle-sub-2" className="nav-bar__toggle"/>
                <ul className="nav-bar__list">
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Maladie</a>
                    </li>
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Maternité</a>
                    </li>
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Annuel</a>
                    </li>
                </ul>
            </li>
    );
  }
});

module.exports = MenuDayoff;
				
				
