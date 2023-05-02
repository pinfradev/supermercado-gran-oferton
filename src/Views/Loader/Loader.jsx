import { Spinner } from "react-bootstrap"
import  ReactDOM  from "react-dom"
import './loader.css'
function Loader() {
    return ReactDOM.createPortal(
        <LoaderSpinner/>,
        document.getElementById("loader")
    )
}

function LoaderSpinner() {
    return (
        <div className="spinner">
            <Spinner animation="border" variant="primary">

            </Spinner>
        </div>
    )
}

export {Loader}