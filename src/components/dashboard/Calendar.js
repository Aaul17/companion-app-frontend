import React, { Component } from "react";
import dateFns from "date-fns";
import NewAptModal from './NewAptModal'

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    open: false
  }

  handleOpen = (event, date) => {
    console.log(event.target)
    this.setState({open: true}, () => {console.log(this.state.open)})
    let newDate = dateFns.format(date,'YYYY-MM-DDTHH:mm:ss')
    this.props.fillInNewAptModal(newDate)
  }

  handleClose = (event) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.newApt(event)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY"
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    )
  }

  renderDays() {
    const dateFormat = "dddd"
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth)

    for (let i = 0; i<7; i++){
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      )
    }
    return <div className="days row">{days}</div>
  }

  renderCells() {
    // debugger
    const { currentMonth, selectedDate } = this.state
    const monthStart = dateFns.startOfMonth(currentMonth)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            onDoubleClick={event => this.handleOpen(event, this.state.selectedDate)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day) => {
    console.log(day)
    const currentDay = dateFns.format(day, 'YYYY-MM-DD')
    this.setState({
      selectedDate: day
    })
    this.props.renderApts(currentDay)
  }

  onDateDoubleClick = (event) => {
    console.log('double click works!')
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }

  render() {
    // debugger
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        <NewAptModal
        newApt={this.props.newApt}
        newAptName={this.props.newAptName}
        newAptDetails={this.props.newAptDetails}
        newAptScheduled={this.props.newAptScheduled}
        handleChange={this.props.handleChange}
        open={this.state.open}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

export default Calendar;
