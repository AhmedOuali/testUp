var React = require('react');

var dayOffDetails = React.createClass({
					<div class="information">
				<h3>Details du congé</h3>
				<div class="main">
					<div class="form-right-w3ls">
						<select class="form-control">
					<option value="">Type Congé</option>
						<option>Maternité</option>
						<option>Maladie</option>
						<option>Annuel</option>
					</select>
					</div>
					
					<div class="form-right-w3ls">
						<select class="form-control">
					<option value="">Type Congé</option>
						<option>Maternité</option>
						<option>Maladie</option>
						<option>Annuel</option>
					</select>
					</div>
				</div>
			
				<div class="main">
					<div class="form-left-w3l">
						<input id="datepicker" name="text" type="text" placeholder="Departure Date &" required="">
						<input type="text" id="timepicker" name="Time" class="timepicker form-control hasWickedpicker" placeholder="Horloge" required=""
						 onkeypress="return false;">
						<div class="clear"></div>
					</div>
					<div class="form-right-w3ls">
						<input id="datepicker1" name="Text" type="text" placeholder="Return Date &" required="">

						<input type="text" id="timepicker1" name="Time" class="timepicker1 form-control hasWickedpicker" placeholder="Horloge" required=""
						 onkeypress="return false;">
						<div class="clear"></div>
					</div>
				</div>
				
				
				
			
			
			<div class="form-control-w3l">
				<textarea name="Message" placeholder="Commentaires..."></textarea>
			</div>
			</div>
    )
  }
});

module.exports = dayOffDetails;
