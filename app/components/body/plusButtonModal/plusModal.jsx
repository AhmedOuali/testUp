var React = require('react');
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


  const PlusModal = ( props ) => {
	
    return (
		
		<div id="plusModal" className="modal" >
			<div className="modal-content">
				<span className="close">&times;</span>
				<div className="appointment-w3">
					<form action="javascript: false" method="post">
						<div className="personal">
							<h2> Details Personnels </h2>
							<div className="main">

								<div className="form-left-w3l">
									<select 
										className="form-control" 
										onChange={(event) => {props.modalContent.changeState({collaborateur: event.target.value})}}
										value={props.modalContent.collaborateur}>
										
										<option>Nesrine Jemai</option>
										<option>Souhaib Belguith</option>
										<option>Ahmed Ouali</option>
										<option>Mohamed Dai</option>
									</select>
								</div>
								<div className="form-left-w3l">

									<input type="text" name="email" placeholder="Code" required="" />
								</div>

							</div>

						</div>
						<div className="information">
							<h3>Details du congé</h3>
							<div className="main">
								<div className="form-right-w3ls">
									<select className="form-control">
										<option value="">Type Congé</option>
										<option>Maternité</option>
										<option>Maladie</option>
										<option>Annuel</option>
									</select>
								</div>

								<div className="form-right-w3ls">
									<select className="form-control">
										<option value="">Type Congé</option>
										<option>Maternité</option>
										<option>Maladie</option>
										<option>Annuel</option>
									</select>
								</div>
							</div>

							<div className="main">
								<div className="form-left-w3l">
									<input 
										name="beginDay" 
										value = { props.modalContent.beginDay } 
										type="date" 
										placeholder="Departure Date &" required=""
										onChange={(event) => {props.modalContent.changeState({beginDay: event.target.value})}} />
									<input type="text" id="timepicker" name="Time" className="timepicker form-control hasWickedpicker" placeholder="Horloge" required=""
										onkeypress="return false;" />
									<div className="clear"></div>
								</div>
								<div className="form-right-w3ls">
									<input 
										name="endDay" 
										type="date" 
										value = { props.modalContent.endDay } 
										placeholder="Return Date &" required="" 
										onChange={(event) => {props.modalContent.changeState({endDay: event.target.value})}}/>

									<input type="text" id="timepicker1" name="Time" className="timepicker1 form-control hasWickedpicker" placeholder="Horloge" required=""
										onkeypress="return false;" />
									<div className="clear"></div>
								</div>
							</div>
						</div>
						<div className="form-control-w3l">
							<textarea 
								name="Message" 
								placeholder="Commentaires..."
								value = { props.modalContent.title }
								onChange={(event) => {props.modalContent.changeState({title: event.target.value})}}
							>
							</textarea>
						</div>
						<div className="btnn" onClick={props.modalContent.eventCreator}>
							<input type="submit" value="Valider" onClick={props.modalContent.closePlusModal}/>
						</div>
					</form>
				</div>
			</div>

		</div>
    )
  };
  
	
  
  
module.exports = PlusModal;

