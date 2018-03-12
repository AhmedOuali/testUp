var React = require('react');
var MenuLeft = require('MenuLeft')
var MenuRight = require('MenuRight')
var Calendar = require('Calendar')
var Header = require ('Header')
var PlusButton = require('PlusButton')
var PlusModal = require('PlusModal')
var Footer = require('Footer');

import {MDCDialog} from '@material/dialog/dist/mdc.dialog';
import events from './calendar/events'



import moment from 'moment'
var nbre = 14;
var month = new Array();
month[0] = "Janvier ";
month[1] = "Février ";
month[2] = "Mars ";
month[3] = "Avril ";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Août";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre ";
var Body = React.createClass({
  
  getInitialState: function() {
    return {
      title : '',
      collaborateur : 'Nesrine Jemai',
      code : null,
      dayoffType : null,
      beginDay : moment().format("YYYY-MM-DD"),
      endDay : null,
      events : events,
      open: false,
      view: null,
      date: month[(new Date()).getMonth()],
      selectedEvent: {
        id: "",
        title:"",
        start: "",
        end: "",
      },
      manipulatingCalendar : {
      monthView: null,
      weekView: null,
      nextMonth: null,
      previewMonth: null,
      today: null},

      openPlusModal : () => {
        var modal = document.getElementById('plusModal');
        modal.style.display = "block";
      },

      closePlusModal : () => {
        var modal = document.getElementById('plusModal');
        modal.style.display = "none";
      },

      openEventModal : () => {
        this.setState({open: true});
      },

      closeEventModal : () => {
        var modal = document.getElementById('eventModal');
        modal.style.display = "none";
      },

      changeState : (obj) => {
        this.setState(obj)
      },
      

      eventCreator : () => {
        var event = {
          id: this.state.events.length+1,
          title:this.state.collaborateur+" :" +this.state.title,
          start: this.state.beginDay,
          end: this.state.endDay,
        }
        this.state.events.push(event)
        this.forceUpdate()
      },

      displayFilter : null
    }
  },
  
  render: function () {
    return (
      <myBody>
        <Header/>
        <div className="sideMonthContainer">
          <p className="sideMonth">{this.state.date}</p>
        </div>
				<Calendar
          modalContent = { this.state }
        /> 
        <PlusModal 
          modalContent = { this.state }/>
        <PlusButton
          state = { this.state }/> 
        <Footer
          manipulatingCalendar = {this.state.manipulatingCalendar}/>
      </myBody>
    )
  }
});

function eventCreator() {

  var event = {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  }
  this.events.push(event)
}

module.exports = Body;