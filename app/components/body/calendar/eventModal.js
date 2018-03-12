import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class EventModal extends Component {
  
  handleOpen = () => {
    
    this.props.details.changeState({open: true});
  };

  handleClose = () => {
    this.props.details.changeState({open: false});
  };

  handleRefuse = () => {
    var removeIndex = this.props.details.events
                        .map(function(item) { return item.id; })
                        .indexOf(this.props.details.selectedEvent.id);
    var newEvents = this.props.details.events.splice(removeIndex, 1)
    this.props.details.changeState({events: newEvents})
    this.handleClose()
  };
  
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];
    const bodyStyle = {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
    }
    return (
      
      <div>
        <Dialog
          title="Details"
          modal={false}
          open={this.props.details.open}
          onRequestClose={this.handleClose}
          bodyStyle={bodyStyle}
        >
          <Card className= "card-event">
            <CardHeader
              title={this.props.details.selectedEvent.collaborateur}
              subtitle="Collaborateur"
              avatar="http://www.material-ui.com/images/jsa-128.jpg"
            />
          <Divider />

            
            <CardTitle title="Congé Annuel" subtitle="Equipe1" />
            <CardText>
              {this.props.details.selectedEvent.title}
            </CardText>
            <Divider />
            <CardActions>
              <RaisedButton label="Accepter" primary={true} onClick={this.handleClose} />
              <RaisedButton label="Refuser" secondary={true} onClick={this.handleRefuse}/>
            </CardActions>
          </Card>
        </Dialog>
      </div>
    );
  }
}
module.exports = EventModal;



