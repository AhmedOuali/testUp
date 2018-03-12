import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import Snackbar from 'material-ui/Snackbar';
import events from './events'
import moment from 'moment'
import WheelReact from 'wheel-react'


var EventModal = require('EventModal')

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

var allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
var selectedEvent = null ;
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
class Calendar extends Component {
  constructor(props){
    super(props);
    WheelReact.config({
      left: () => {
        console.log('test')
        
      },
      right: () => {
        console.log('test')
        
      },
      up: () => {
        this.handlePrevMonth()      
      },
      down: () => {
        console.log('test')
        this.handleNextMonth()

        
      }
    });
    this.props.modalContent.changeState({
      manipulatingCalendar: {
        monthView: this.handleMonthView,
        weekView: this.handleWeekView,
        nextMonth: this.handleNextMonth,
        handlePrevMonth: this.handlePrevMonth,
        today: this.handleToday }})
  }
  displayFilter = (events = this.props.modalContent.events) => {
    return events;
  }
  handleNextMonth = () =>{
    let boutons = document.getElementsByClassName('rbc-btn-group');
    boutons[0].childNodes[2].click();
  }

  handlePrevMonth = () =>{
    let boutons = document.getElementsByClassName('rbc-btn-group');
    boutons[0].childNodes[1].click();
  }

  handleToday = () => {
    let boutons = document.getElementsByClassName('rbc-btn-group');
    boutons[0].childNodes[0].click();
  }

  handleMonthView = () => {
    let boutons = document.getElementsByClassName('rbc-btn-group');
    boutons[1].childNodes[0].click();
  }

  handleWeekView = () => {
    let boutons = document.getElementsByClassName('rbc-btn-group');
    boutons[1].childNodes[1].click();
    console.log(boutons[1].childNodes[1])
  }

  eventStyleGetter = (event, start, end, isSelected) => {
    var color = event.hexColor
    let newStyle = {
      backgroundColor: "#"+color,
      color: 'white',
      borderRadius: "0px",
      border: "none"
    };

    if (event.isMine){
      newStyle.backgroundColor = "lightgreen"
    }

    return {
      className: "",
      style: newStyle
    };
  }

  render() {    
    return(
    this.props.modalContent.events = events,
    this.props.modalContent.displayFilter = this.displayFilter,
    
    <div {...WheelReact.events}>
    <EventModal 
      details= {this.props.modalContent}/> 
    <BigCalendar
      popup
      selectable
      toolbar= {true}
      culture= {'fr'}
      events= {this.props.modalContent.displayFilter()}
      views={allViews}
      onSelectEvent={event => {
        this.props.modalContent.changeState({open: true})
        this.props.modalContent.changeState({selectedEvent: event}) ;
        this.props.modalContent.openEventModal();
        }
      }
      onSelectSlot={(
        slotInfo
      ) => {
          this.props.modalContent.changeState({beginDay : moment(slotInfo.start).format("YYYY-MM-DD")});
          this.props.modalContent.changeState({endDay : moment(slotInfo.end).add(1,'days').format("YYYY-MM-DD")});
          this.props.modalContent.openPlusModal()
        }
      }
      eventPropGetter={
        this.eventStyleGetter
      }
      step={60}
      showMultiDayTimes
      defaultDate={new Date(Date.now())}
      onNavigate={(date) => this.props.modalContent.changeState({date: month[date.getMonth()]})}
      defaultView= 'month'
     
    />
    </div>
    );
  }
}

module.exports = Calendar;
