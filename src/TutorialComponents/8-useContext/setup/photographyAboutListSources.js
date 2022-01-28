
import React,{Component} from "react";




class PhotographyAboutListSources extends Component {
    constructor() {
        super();
        console.log("CONSTRUCT")
    }
    componentDidMount() {
        console.log("DID MOUNT")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DID UPDATE")
    }

    componentWillUnmount() {
        console.log("WILL UNMOUNT")
    }

    render() {
        console.log("RENDER")
        return (
            <div className="photoAboutListSources componentTagAbout">

                <h5 style={{marginTop:"2.5em" , marginBottom:"0.5em" , paddingTop:"1.5em"}}>List photo sources</h5>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em" , paddingBottom:"2em"}}>
                    <a href="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80</h6>
                    </a>
                </div>

            </div>
        )
    }
}

export default PhotographyAboutListSources;