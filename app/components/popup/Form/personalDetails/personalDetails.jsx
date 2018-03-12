var React = require('react');

var personalDetails = React.createClass({
  render: function () {
    return ( 
      <div class="personal">
        <h2> Details Personnels </h2>
          <div class="main">

             <div class="form-left-w3l">
              <select class="form-control">
                <option value="">Collaborateur</option>
                <option>Nesrine Jemai</option>
                <option>Souhaib Belguith</option>
                <option>Ahmed Ouali</option>
                <option>Mohamed Dai</option>
              </select>
            </div>
            <div class="form-left-w3l">
              <input type="text" name="email" placeholder="Code" required="">
            </div>
          </div>
        </div>
)
  }
});

module.exports = personalDetails;