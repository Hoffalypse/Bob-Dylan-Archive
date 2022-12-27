import { Container, Row, Col, Button } from "react-bootstrap";
import '../styles/homepage.css'
import ReactPlayer from 'react-player/lazy'

function Homepage () {

    return (
    <div className='bkclr'>
        <p className='larger'> Welcome to the Dylan Archives</p>
         <Container style={{ color: "white" }}>
        <Row>
          <Col>
          <p>Some text here about why this site was created</p>
          </Col>
          <Col>
            {/* look for react player npm ro see preferences and available formats */}
            <ReactPlayer className='player' url='https://www.youtube.com/watch?v=Mt4XbGPsoSA'
            playing='true' />
            </Col>
            <Col> 
            <p>Some text here about it being not for profit and donations are welcome</p>
            <Button className="play">Donate</Button>
            </Col>
            </Row>
            </Container>
           
    </div>
    )

}

export default Homepage;