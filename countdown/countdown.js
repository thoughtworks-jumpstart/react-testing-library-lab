import React from 'react'

class Countdown extends React.Component {
  //set remaining time to 10 sec
  state = {remainingTime: 10000}
  componentDidMount() {
    //end is the current time +  10 sec
    const end = Date.now() + this.state.remainingTime
    this.interval = setInterval(() => {
      //remainin g time will keep decreasing
      const remainingTime = end - Date.now()
      if (remainingTime <= 0) {
        //if reach the end stop
        clearInterval(this.interval)
        this.setState({remainingTime: 0})
      } else {
        //update the remaining time
        this.setState({
          remainingTime,
        })
      }
    })
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return this.state.remainingTime
  }
}

export {Countdown}
