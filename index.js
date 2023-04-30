/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(recordArray) {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(recordArray) {
    const employeeRecords = recordArray.map(createEmployeeRecord);
    //const firstName = employeeRecords.map((record) => record.firstName);
    return employeeRecords;
}

function createTimeInEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(' ');
    const [hour, minute] = time.split(':');
    
    const newTimeInEvent = {
      type: 'TimeIn',
      hour: parseInt(hour),
      date: date,
    };
    
    this.timeInEvents.push(newTimeInEvent);
    
    return this;
  }

  function createTimeOutEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(' ');
    const [hour, minute] = time.split(':');
    
    const newTimeOutEvent = {
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date,
    };
    
    this.timeOutEvents.push(newTimeOutEvent);
    
    return this;
  }

function hoursWorkedOnDate( date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    
    const timeIn = parseInt(timeInEvent.hour);
    const timeOut = parseInt(timeOutEvent.hour);

    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    const payRate = this.payPerHour;
    return hours * payRate
}

// function allWagesFor(record) {
//     const datesWorked = record.timeInEvents.map(event => event.date);
//     const totalPay = datesWorked.reduce((total, date) => {
//         return total + wagesEarnedOnDate(record, date);
//     }, 0);
//     return totalPay; 
// }

function calculatePayroll(record) {
    const totalPay = record.reduce((total, record) => {
        return total + allWagesFor(record);
    }, 0)
    return totalPay;
}

function findEmployeeByFirstName(collection, firstName) {
    return collection.find(function(collection) {
        return collection.firstName === firstName;
    })
}

function calculatePayroll(employeeRecords) {
    let totalPayroll = employeeRecords.reduce(function(acc, record) {
      return acc + allWagesFor.call(record);
    }, 0);
    return totalPayroll;
  }