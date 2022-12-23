import { Navbar, Nav, Row, Col } from "react-bootstrap";
import '../styles/homepage.css'
import ReactPlayer from 'react-player/lazy'

function Homepage () {

    return (
        <div className='bkclr'>
            <h1> Welcome to the Dylan Archives</h1>
            <ReactPlayer className='player' url='https://www.youtube.com/watch?v=a6Kv0vF41Bc' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}

export default Homepage;