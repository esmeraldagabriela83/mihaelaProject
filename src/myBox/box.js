
import React,{Component} from "react";


class Box extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTED");
        this.state = {
            text: 'JavaScript Course',
            backgroundColor: 'mediumspringgreen',
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("UPDATED");
    }

    componentDidMount() {
        console.log("MOUNTED");
        setInterval(() => {
            this.setState({
                backgroundColor: this.state.backgroundColor === "indianred"? "mediumspringgreen" : "indianred"
            })
        },3000)
    }

    render() {
        console.log("RENDERED");
        return <div
            style={{ backgroundColor: this.state.backgroundColor ,
                borderRadius:"0.5em",
                padding:"0.7em",
                width:"13em" ,
                height:"2.5em"}}>
            {this.state.text}
        </div>
    }
}
export default Box;
