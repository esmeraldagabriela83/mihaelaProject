
import React,{Component} from "react";




class PhotographyShoppingCartSources extends Component {
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
            <div className="componentTagAbout shopSources" style={{paddingTop:"1.5em" , paddingBottom:"1.5em"}}>

                <h5 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Shopping cart sources:</h5>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://www.youtube.com/watch?v=AmIdY1Eb8tY&t=151s">
                        <h6 className="colorLink">https://www.youtube.com/watch?v=AmIdY1Eb8tY&t=151s</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1507138451611-3001135909fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1507138451611-3001135909fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1488901512066-cd403111aeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1488901512066-cd403111aeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1554342872-034a06541bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1554342872-034a06541bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                        <h6 className="colorLink">https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80</h6>
                    </a>
                </div>

            </div>
        )
    }
}

export default PhotographyShoppingCartSources;


