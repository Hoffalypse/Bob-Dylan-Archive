import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactPlayer from "react-player/lazy";
import "../styles/archive.css";

function Archive() {
  return (
    <div className="bkgclr">
      <p className="larger">Welcome to the Archives!</p>

      <Container style={{ color: "white" }}>
        <Row>
          <Col>
          <Form>
            <p style={{textAlign:'center'}}>Find a Song </p>
            <Form.Select aria-label="Default select example"style={{fontWeight:'bolder', marginBottom:'25px'}}>
              <option>Song Title</option>
              <option value="1">Don't Think Twice</option>
              <option value="2">Hurricane</option>
              <option value="3">Billy #1</option>
            </Form.Select>
        {/* These values will be imported from DB once the song title is chosen */}
            <Form.Select aria-label="Default select example"style={{fontWeight:'bolder', marginBottom:'25px'}}>
              <option>Year Performed</option>
              <option value="1">2022</option>
              <option value="2">2021</option>
              <option value="3">1984</option>
            </Form.Select>
{/* these will be populted from DB once first two options are selected */}
            <Form.Select aria-label="Default select example"style={{fontWeight:'bolder', marginBottom:'25px'}}>
              <option>Venue</option>
              <option value="1">Carnegie Hall</option>
              <option value="2">Grand Ole Opry</option>
              <option value="3">Mission Ballroom</option>
            </Form.Select>
            <Button className="play">Watch</Button>
            </Form>
          </Col>
          <Col>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=i8z7KzB16Ik"
              playing="true"
            />
          </Col>
          <Col >
            <p style={{ textAlign: "center" }}>Now Playing</p>
          <ul className="now-playing">
            <li> Visions of Johanna</li>
            <li> Portsmouth, UK</li>
            <li> Summer 2000 </li>
            <li> The Never Ending Tour </li>
          </ul>
          
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
export default Archive;
