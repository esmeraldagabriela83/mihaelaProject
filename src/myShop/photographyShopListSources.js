
import React,{Component} from "react";


class PhotographyShopListSources extends Component {
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
            <div className="componentTagAbout shopSources" style={{ marginTop:"1.5em" , paddingTop:"1.5em" , paddingBottom:"1.5em"}}>

                <h5 style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>Sources of list presentation items:</h5>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://course-api.com/javascript-store-products" target="_blank">
                        <h6 className="colorLink">https://course-api.com/javascript-store-products</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://www.youtube.com/watch?v=4UZrsTqkcW4&t=32822s" target="_blank">
                        <h6 className="colorLink">https://www.youtube.com/watch?v=4UZrsTqkcW4&t=32822s</h6>
                    </a>
                </div>

                <div style={{marginTop:"0.5em" , marginBottom:"0.5em"}}>
                    <a href="https://www.youtube.com/watch?v=Law7wfdg_ls" target="_blank">
                        <h6 className="colorLink">https://www.youtube.com/watch?v=Law7wfdg_ls</h6>
                    </a>
                </div>

            </div>
        )
    }
}

export default PhotographyShopListSources;
