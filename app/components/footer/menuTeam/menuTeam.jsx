var React = require('react');

var MenuTeam = React.createClass({
  render: function () {
    return (
      <li className="nav-bar__list-item">
                <label htmlFor="toggle-sub-1" className="nav-bar__sub-label">Mon equipe</label>
                <input type="checkbox" id="toggle-sub-1" className="nav-bar__toggle"/>
                <ul className="nav-bar__list">
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Nesrine Jemai</a>
                    </li>
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Souhaib Belguith</a>
                    </li>
                    <li className="nav-bar__list-item">
                        <a href="#" className="nav-bar__link">Ahmed Ouali</a>
                    </li>
                </ul>
            </li>
     )
  }
});
        

module.exports = MenuTeam;