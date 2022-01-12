
import React, {Component} from "react";
import ClockDate from "./clockDate";
import ClockTime from "./clockTime";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.timerId = null;
        this.state = {
            dateTime: (new Date())
        }
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                dateTime: (new Date())
            })
        },1000)
    }

    render() {
        return<>
            <ClockDate date={this.state.dateTime.toLocaleDateString()}/>
            <ClockTime time={this.state.dateTime.toLocaleTimeString()}/>
        </>
    }
}
export default Clock;